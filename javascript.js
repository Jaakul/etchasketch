const container = document.getElementById('sketchContainer');
const defaultSize16 = 16*16
let newSize 

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
    for(let i=0;i<defaultSize16;i++){
        el()
    }
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


