const canvas = document.querySelector(".canvas");

const gridDimension = 960;
let gridSize = 16;

function displayCanvas() {
    canvas.style.width = gridDimension + "px";
    canvas.style.height = gridDimension + "px";

    for ( let i = 0; i < gridSize; i++ ) {
        const row = document.createElement( "div" );
        row.classList.add( "row" );
        canvas.appendChild( row );

        for ( let j = 0; j < gridSize; j++ ) {
            const box = document.createElement( "div" );
            box.classList.add( "box" );
            row.appendChild( box );
        }
    }

    document.querySelectorAll( ".canvas .row" ).forEach(row => row.style.flexBasis = (gridDimension / gridSize) + "px" );
    document.querySelectorAll( ".canvas .box" ).forEach(box => box.style.flexBasis = (gridDimension / gridSize) + "px" );
}

displayCanvas();

canvas.addEventListener("mouseover", (e) => paintBox(e));

const colorPicker = document.querySelector("#colorPicker");

colorPicker.addEventListener("input", (e) => setColor(e.target.value));

function setColor(color) {
    paintColor = color;
}

let paintColor = colorPicker.value;

function paintBox(e) {
    if (e.target.className === "canvas") {
        return;
    }
    e.target.style.backgroundColor = paintColor;
}

const gridSlider = document.querySelector("#gridSlider")
    .addEventListener("input", (e) => setCanvasSize(e.target.value));

function setCanvasSize(size) {
    gridSize = size;
    clearCanvas();
    displayCanvas();
}

function clearCanvas() {
    while(canvas.firstElementChild) {
        canvas.firstElementChild.remove();
    }
}