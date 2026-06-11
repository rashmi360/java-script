function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("result");

    if (height === "" || weight === "") {
        result.innerHTML = "Please enter height and weight";
        return;
    }

    let bmi = weight / ((height / 100) * (height / 100));

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } 
    else if (bmi < 25) {
        status = "Normal Weight";
    } 
    else if (bmi < 30) {
        status = "Overweight";
    } 
    else {
        status = "Obese";
    }

    result.innerHTML =
        "BMI: " + bmi.toFixed(2) + "<br>Status: " + status;
}