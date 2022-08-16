const container = document.getElementById('sketchContainer');
const defaultSize16 = 16*16
const gridSize = document.getElementById('gridSize');
const colorPicker = document.getElementById('colorPicker');
const rainbow = document.getElementById('rainbow');
const shader = document.getElementById('shader');
const resetButton = document.getElementById('resetButton');
let newSize;
let currentColor = "black"
for(let i=0;i<defaultSize16;i++){
    el()
}

function el(){
    const container = document.getElementById('sketchContainer');
    const divMaker = document.createElement('divs');
    divMaker.setAttribute('id','divs');
    container.appendChild(divMaker);
    
}

function removeAllChildren(){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
}

function reset(){
removeAllChildren();
hwSet(16);

}

function setGrid(){
    removeAllChildren();
    for(let i=0;i<newSize;i++){
        el()
    }}

function hwSet(input){
newSize = input**2;
console.log(newSize);
setGrid(input);
let ele = document.querySelectorAll("divs");
let grid = document.getElementById("sketchContainer")
ele.forEach(
        change => {
        change.style.height = `${640/input}px`
        change.style.width = `${640/input}px`
    }
)
grid.style.gridTemplateColumns = `repeat(${input},${640/input}px)`
grid.style.gridTemplateRows = `repeat(${input},${640/input}px)`
}


function test(){
    alert('why is this function not running?')
}



function colorChanger(){
    let ele = document.querySelectorAll('divs');
    for (let i=0;i<ele.length;i++){
    function eleChange(){ele[i].style.backgroundColor = `${currentColor}`;}
    ele[i].addEventListener('mouseover',eleChange)
    }
    }


resetButton.addEventListener('click',reset);

container.addEventListener('click',colorChanger)

colorPicker.addEventListener('input',function(){
    var theColor = colorPicker.value;
    currentColor = theColor;
})

gridSize.addEventListener('click',gridSizBtn)

function gridSizBtn(){
    var a = prompt("Please enter a number to indicate grid size. \nDefault 16x16. Max 100.","16");
    if (a!= null && a<101 && a>0){
        hwSet(a);
    }
    else {alert("You have inputted an invalid selection")}}
