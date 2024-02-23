const containerDiv = document.getElementById("container");
const body = document.getElementsByTagName("body")[0];

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

    containerDiv.appendChild(rowDiv);
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
