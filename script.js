const canvas = document.querySelector(".canvas");

// TODO Create a 16x16 grid square w/ flexbox
let gridSize = 16;

function displayCanvas() {
    for ( let i = 0; i < gridSize; i++ ) {
        const row = document.createElement( "div" );
        row.classList.add( "row" );
        canvas.appendChild( row );

        for ( let j = 0; j < gridSize; j++ ) {
            const box = document.createElement( "span" );
            row.appendChild( box );
        }
    }
}

displayCanvas();

// TODO Add event listeners to these squares when hovering. Their colors change after being hovered.

// TODO ...