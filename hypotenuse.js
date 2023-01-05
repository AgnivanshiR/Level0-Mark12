var sides = document.querySelectorAll('.side-input');
var hypotenuseBtn = document.querySelector('#hypotenuse-btn')
var outputEl = document.querySelector('#output')

function calculateSumOfSquires(a,b){
    var sumOfSquires = a*a+b*b;
    return sumOfSquires;
}

function calculateHypotenuse(){
    var sumOfSquires = calculateSumOfSquires(Number(sides[0].value), Number(sides[1].value));
    var lengthOfHypotenuse = Math.sqrt(sumOfSquires);
    outputEl.innerText = "The Length of Hypotenuse is: " + lengthOfHypotenuse;
}



hypotenuseBtn.addEventListener('click', calculateHypotenuse)