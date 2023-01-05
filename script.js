var inputs = document.querySelectorAll('.input--angle');
var isTriangleBtn = document.querySelector('#btnIsTriangle');
var outputEl = document.querySelector('#output');

function calculateSum(angle1, angle2, angle3){
    var sumOfAngle = (angle1+angle2+angle3)
    return sumOfAngle;
}

function checkTriangle(){
    var sumOfAngle = calculateSum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if (sumOfAngle===180){
        outputEl.innerText = "Yes, these angles form triangle"
    } else {outputEl.innerText = "no, these angles don't form triangle"}
    
}

isTriangleBtn.addEventListener("click", checkTriangle)