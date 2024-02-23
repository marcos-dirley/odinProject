const containerDiv = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "row-div";

    for (let j = 0; j < 16; j++) {
        let columnDiv = document.createElement("div");
        columnDiv.className = "column-div";
        rowDiv.appendChild(columnDiv);
    }

    containerDiv.appendChild(rowDiv);
}
