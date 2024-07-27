const canvas = document.querySelector(".canvas");

let gridSize = 16;

function displayCanvas() {
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
}

displayCanvas();

canvas.addEventListener("mouseover", (e) => paintBox(e));

let paintColor = "#000000";

function paintBox(e) {
    if (e.target.className === "canvas") {
        return;
    }
    e.target.style.backgroundColor = paintColor;
}

// TODO ...