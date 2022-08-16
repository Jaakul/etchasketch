const container = document.getElementById('sketchContainer');
const defaultSize16 = 16*16
const gridSize = document.getElementById('gridSize');
const colorPicker = document.getElementById('colorPicker');
const rainbow = document.getElementById('rainbow');
const shader = document.getElementById('shader');
const resetButton = document.getElementById('resetButton');
let newSize;
let currentColor = "black"
let currentSize = 16


//initiates page with default 16x16 grid
for(let i=0;i<defaultSize16;i++){
    el()
}
colorChanger();

function el(){
    const container = document.getElementById('sketchContainer');
    const divMaker = document.createElement('divs');
    divMaker.setAttribute('id','divs');
    container.appendChild(divMaker);
    
}

//fancy recursive removal of all divs
function removeAllChildren(){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
}

function reset(){
removeAllChildren();
hwSet(currentSize);
colorChanger();

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

//color shader//
function colorShader(){
    let ele = document.querySelectorAll('divs');

    function colorMaker(){
        const controller = new AbortController();
        function aborter(){controller.abort()}
        for (let i=0;i<ele.length;i++){
        function eleChange(){ele[i].style.filter = "brightness(85%)";}
        ele[i].addEventListener('mouseover',eleChange,{signal:controller.signal})
        container.addEventListener('mouseup',aborter)
        }
        }
    
        container.addEventListener('mousedown',colorMaker)
    }

//random color generator//





//colorChanger
function colorChanger(){
let ele = document.querySelectorAll('divs');

//function to change color with event listeners and aborter
//can not use function expressions because it seems to cause an exponential
// repetition of function creation and thus slowing down the app.
function colorMaker(){
    const controller = new AbortController();
    function aborter(){controller.abort()}
    for (let i=0;i<ele.length;i++){
    function eleChange(){ele[i].style.backgroundColor = `${currentColor}`;}
    ele[i].addEventListener('mouseover',eleChange,{signal:controller.signal})
    container.addEventListener('mouseup',aborter)
    }
    }


    container.addEventListener('mousedown',colorMaker)
}


//reset button and function
resetButton.addEventListener('click',reset);


//color picking button and function
colorPicker.addEventListener('input',function(){
    var theColor = colorPicker.value;
    currentColor = theColor;
})

//grid sizing button & function
gridSize.addEventListener('click',gridSizBtn)
function gridSizBtn(){
    var a = prompt("Please enter a number to indicate grid size. \nDefault 16x16. Max 100.","16");
    if (a!= null && a<101 && a>0){
        hwSet(a);
        colorChanger();
    }
    else {alert("You have inputted an invalid selection")}
return currentSize = a
}
