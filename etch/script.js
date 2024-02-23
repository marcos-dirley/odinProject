const containerDiv = document.getElementById("container");
const button = document.getElementsByTagName("button")[0];

function createSquare(size) {
    let gridDiv = document.getElementById("grid");
    if (gridDiv) containerDiv.removeChild(gridDiv);

    let newGrid = document.createElement("div");
    newGrid.id = "grid";

    for (let i = 0; i < size; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.className = "row-div";
        rowDiv.style.display = "flex";
        rowDiv.style.flex = "1";

        for (let j = 0; j < size; j++) {
            let columnDiv = document.createElement("div");
            columnDiv.className = "column-div";
            columnDiv.style.flex = "1";

            numberOfSquares = size;
            addTrailEffectOnHover(columnDiv, numberOfSquares);
            rowDiv.appendChild(columnDiv);
        }
        newGrid.appendChild(rowDiv);
    }
    containerDiv.appendChild(newGrid);
}

function addTrailEffectOnHover(el, numberOfSquares) {
    el.style.opacity = 0;

    el.addEventListener("mouseover", function() {
        const red = Math.floor(Math.random() *  256);
        const green = Math.floor(Math.random() *  256);
        const blue = Math.floor(Math.random() *  256);
        el.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        el.style.opacity = 1;
        el.style.transition = (numberOfSquares > 32) ? "0s" : "0.02s";
    })

    el.addEventListener("mouseout", function() {
        el.style.opacity = 0;
        el.style.transition = "opacity .5s";
    }) 
}

createSquare(16);

button.addEventListener("click", function() {
    let input = prompt("Insert the desired number of squares per side");

    while (input === "" || isNaN(Number(input)) || input > 50) {
        input = prompt("Invalid input: must be a number less than or equals to 50");
    }

    if (input === null) return;

    createSquare(+input);
})
