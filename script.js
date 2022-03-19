var slider = document.getElementById("rate");
var output = document.getElementById("value-placeholder");
var result = document.getElementById("result-value");
var interest = document.getElementById("interest-value");
var amount = document.getElementById("amount-value");
var year = document.getElementById("year-value");
var select = document.getElementById("years");
var currentYear = new Date().getFullYear();

var visibl = document.querySelector(".visibl");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
};

function compute() {
    document.getElementById("result").style.display = "block";
    document.getElementById("interest").style.display = "block";
    document.getElementById("amount").style.display = "block";
    document.getElementById("year").style.display = "block";
    p = document.getElementById("principal");
    let sValue = select.value;

    result.innerHTML = `${p.value}`;
    interest.innerHTML = `${slider.value}%`;
    amount.innerHTML = `${(p.value * sValue * slider.value) / 10}`;
    year.innerHTML = `${Number(currentYear) + Number(sValue)}`;
}
