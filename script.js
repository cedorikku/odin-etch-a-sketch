const canvas = document.querySelector( ".canvas" );
const gridSlider = document.getElementById( "gridSlider" );
const gridSliderLabel = document.getElementById( "gridSliderLabel" );
const colorPicker = document.getElementById( "colorPicker" );

const gridDimension = 600;
let gridSize = 16;

document.addEventListener( "DOMContentLoaded" , () => {
    updateSliderLabel();
    displayCanvas();
});

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

    document.querySelectorAll( ".canvas .row" ).forEach(row => row.style.flexBasis = ( gridDimension / gridSize ) + "px" );
    document.querySelectorAll( ".canvas .box" ).forEach(box => box.style.flexBasis = ( gridDimension / gridSize ) + "px" );
}

canvas.addEventListener( "mouseover", ( e ) => paintBox( e ) );

colorPicker.addEventListener( "input", ( e ) => setColor( e.target.value ) );

function setColor( color ) {
    paintColor = color;
}

let paintColor = colorPicker.value;

function paintBox( e ) {
    if ( e.target.className === "canvas" ) {
        return;
    }

    if ( document.getElementById( "shuffle" ).checked ) {
        e.target.style.backgroundColor = `rgb(${ randomize(255) }, ${ randomize(255) }, ${ randomize(255) })`;
        return;
    }

    e.target.style.backgroundColor = paintColor;
}

function randomize( n ) {
    return Math.floor((Math.random() * n) + 1);
}

gridSlider.addEventListener( "input", ( e ) => setCanvasSize( e.target.value ) );

function setCanvasSize( size ) {
    gridSize = size;
    updateSliderLabel();
    clearCanvas();
    displayCanvas();
}

function clearCanvas() {
    while( canvas.firstElementChild ) {
        canvas.firstElementChild.remove();
    }
}

function updateSliderLabel() {
    gridSliderLabel.textContent = `${ gridSlider.value } x ${ gridSlider.value }`;
}