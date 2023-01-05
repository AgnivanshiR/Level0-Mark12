var quizForm = document.querySelector('.quiz-form');
var submitBtn = document.querySelector('#submit-btn');
var outputEl = document.querySelector('#output')
var correctAnswer =["90°", "right angled"]

function calculateScore(){
    let score = 0;
    let index = 0;
    var formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value===correctAnswer[index]){
            score=score+1;
        }
        index = index+1
    }
    outputEl.innerText = "Your Score is" + score

}
submitBtn.addEventListener('click', calculateScore)