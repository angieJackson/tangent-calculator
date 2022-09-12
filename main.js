function milesConverter() {
    document.getElementById("outputmiles").innerHTML = miles;
}

function elevation(valNum) {
    document.getElementById("outputelevation").innerHTML = valNum;
}

function calculate() {
    var miles = document.getElementById("miles").value;
    var feet = miles * 5280;
    var elevation = document.getElementById("elevation").value;

    var angle = Math.atan(elevation / feet);
    var degrees = (180 / Math.PI) * angle;
    let x = degrees.toFixed(4);

    document.getElementById("angle").innerHTML = x;

    var grade = angle * 100;
    let y = grade.toFixed(1);

    document.getElementById("grade").innerHTML = y;
}

function resetFunction() {
    document.getElementById("calcForm").reset();

    const angleInput = document.getElementById("angle");
    angleInput.value = "";

    const gradeInput = document.getElementById("grade");
    gradeInput.value = "";
}