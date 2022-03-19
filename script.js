var slider = document.getElementById("rate");
var output = document.getElementById("value-placeholder");
var resultValue = document.getElementById("result-value");
var interestValue = document.getElementById("interest-value");
var amountValue = document.getElementById("amount-value");
var yearValue = document.getElementById("year-value");
var select = document.getElementById("years");
var currentYear = new Date().getFullYear();

var visibl = document.querySelector(".visibl");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
};

function compute() {
    p = document.getElementById("principal");
    console.log(p.value);
    // debugger;
    if (Number(p.value) <= 0) {
        alert("please enter a positive number");
        document.getElementById("principal").focus();
        document.getElementById("result").style.display = "none";
        document.getElementById("interest").style.display = "none";
        document.getElementById("amount").style.display = "none";
        document.getElementById("year").style.display = "none";
        document.getElementById("positive").style.display = "block";
    } else {
        document.getElementById("positive").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("interest").style.display = "block";
        document.getElementById("amount").style.display = "block";
        document.getElementById("year").style.display = "block";
        let sValue = select.value;

        resultValue.innerHTML = `${p.value}`;
        interestValue.innerHTML = `${slider.value}%`;
        amountValue.innerHTML = `${(p.value * sValue * slider.value) / 10}`;
        yearValue.innerHTML = `${Number(currentYear) + Number(sValue)}`;
    }
}
