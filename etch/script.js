const gridDiv = document.getElementById("grid");
const containerDiv = document.getElementsByTagName("container")[0];
const button = document.getElementsByTagName("button")[0];

for (let i = 0; i < 16; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "row-div";
    rowDiv.style.display = "flex";
    rowDiv.style.flex = "1";

    for (let j = 0; j < 16; j++) {
        let columnDiv = document.createElement("div");
        columnDiv.className = "column-div";
        columnDiv.style.flex = "1";
        addTrailEffectOnHover(columnDiv);
        rowDiv.appendChild(columnDiv);
    }

    gridDiv.appendChild(rowDiv);
}

function addTrailEffectOnHover(el) {
    el.style.backgroundColor = "#de0";
    el.style.opacity = 0;

    el.addEventListener("mouseover", function() {
        el.style.opacity = 1;
        el.style.transition = ".02s"
    })

    el.addEventListener("mouseout", function() {
        el.style.opacity = 0;
        el.style.transition = "opacity .5s";
    }) 
}

button.addEventListener("click", function() {
    let input = prompt("Insert the desired number of squares per side");

    while (input === "" || isNaN(Number(input)) || input > 50) {
        input = prompt("Invalid input: must be a number less than or equals to 50");
    }

    if (input === null) return;

    createSquare(input);
})
