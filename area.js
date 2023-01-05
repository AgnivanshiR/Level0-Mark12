var sides = document.querySelectorAll('.side-input');
var areaBtn = document.querySelector('#area-btn');
var outputEl = document.querySelector('#output');



function calculateArea() {
    var base = Number(sides[0].value)
    var height = Number(sides[1].value)
    var area = (base*height)/2;
    outputEl.innerText = "The area of the triangle is: " + area +" square cm"
}


areaBtn.addEventListener('click', calculateArea)