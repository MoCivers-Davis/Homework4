const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
}

function setNextQuestion() {

}
function selectAnswer() {

}


var questions =
    [{ question: "Do you like JavaScript" }];
