//constants and variable
const container = document.getElementById("container");
let row = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

//grid size 16x16
function defaultGrid(){
    makeRows(16);
    makeColumn(16);
}

//