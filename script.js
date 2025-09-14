// Food Calorie Database (per 100g)
const foodDB = {
  apple: 52,
  banana: 96,
  rice: 130,
  bread: 265,
  egg: 155,
  roti: 45
};

// Exercise Burn Database (per minute)
const exerciseDB = {
  running: 10,
  walking: 4,
  cycling: 8,
  swimming: 6
};

let totalCalories = 0;
let burntCalories = 0;

// Show app
function enterApp() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("app").style.display = "block";
}

function goBack() {
  document.getElementById("welcome").style.display = "flex";
  document.getElementById("app").style.display = "none";
}

// BMI Calculator
function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (weight && height) {
    let bmi = (weight / (height * height)) * 10000;
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    document.getElementById("bmiResult").innerText = 
      `Your BMI is ${bmi.toFixed(2)} (${category})`;
  }
}

// Add Food Calories
function addFood() {
  let name = document.getElementById("foodName").value.toLowerCase();
  let qty = document.getElementById("foodQty").value;

  if (foodDB[name] && qty) {
    let cal = (foodDB[name] * qty) / 100;
    totalCalories += cal;
    document.getElementById("foodResult").innerText = 
      `${name} (${qty}g): ${cal.toFixed(2)} kcal`;
    updateTotal();
  } else {
    alert("Food not found in database!");
  }
}

// Add Exercise Calories
function addExercise() {
  let name = document.getElementById("exerciseName").value.toLowerCase();
  let time = document.getElementById("exerciseTime").value;

  if (exerciseDB[name] && time) {
    let cal = exerciseDB[name] * time;
    burntCalories += cal;
    document.getElementById("exerciseResult").innerText =
      `${name} (${time} min): -${cal.toFixed(2)} kcal`;
    updateTotal();
  } else {
    alert("Exercise not found in database!");
  }
}

// Update total calories
function updateTotal() {
  let netCalories = totalCalories - burntCalories;
  document.getElementById("totalCalories").innerText =
    `Total Intake: ${totalCalories.toFixed(2)} kcal | Burnt: ${burntCalories.toFixed(2)} kcal | Net: ${netCalories.toFixed(2)} kcal`;
}
