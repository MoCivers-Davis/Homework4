const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {

        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")

    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [ //The Array of Questions and Answers for the Quiz game
    {
        question: "Who is the current President",
        answers: [
            { text: "Trump", correct: true },
            { text: "Sanders", correct: false }
        ]
    },
    {
        question: "Who is the richest man in America",
        answers: [
            { text: "Jeff Bezos", correct: true },
            { text: "Mike Bloomberg", correct: false }
        ]
    },
    {
        question: "Who is the current Eagles QB",
        answers: [
            { text: "Wentz", correct: true },
            { text: "Foles", correct: false }
        ]
    },
    {
        question: "What NFL Team does Drew Brees Play for",
        answers: [
            { text: "Saints", correct: true },
            { text: "Cowboys", correct: false }
        ]
    },
    {
        question: "On what college campus are we located on",
        answers: [
            { text: "Upenn", correct: true },
            { text: "Drexel", correct: false }
        ]
    }];
//I became confused with the section below.  Trying to alert the user of thier final score.  
    //var score = 0; //We start the game with a score of 0

// Loop over every question object
//for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    //var answer = confirm(questions[i].question);

    // Compare answers
    //if ((answer === true && questions[i].answers === true) ||
       // (answer === false && questions[i].answers === false)) {
         //Increase score
        //score++
    //}
//}


