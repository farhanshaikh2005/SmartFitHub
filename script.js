// Food Calorie Database (per 100g)
const foodDB = {
  apple: 52,
  banana: 96,
  rice: 130,
  bread: 265,
  egg: 155,
  roti:45
};

// Exercise Burn Database (per minute)
const exerciseDB = {
  running: 10,
  walking: 4,
  cycling: 8,
  swimming: 9
};

let totalCalories = 0;
let burntCalories = 0;

// Show App
function enterApp() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("app").style.display = "block";
}

// BMI Calculator
function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value / 100; // cm to m

  if (weight && height) {
    let bmi = (weight / (height * height)).toFixed(2);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    document.getElementById("bmiResult").innerText = `BMI: ${bmi} (${category})`;
    updateSummary();
  }
}

// Food Calories
function addFood() {
  let food = document.getElementById("food").value.toLowerCase();
  let grams = document.getElementById("grams").value;

  if (foodDB[food]) {
    let cal = (foodDB[food] * grams) / 100;
    totalCalories += cal;
    document.getElementById("foodResult").innerText = `Added ${grams}g ${food}: ${cal} kcal`;
    updateSummary();
  } else {
    document.getElementById("foodResult").innerText = "Food not found in database!";
  }
}

// Exercise Calories
function addExercise() {
  let ex = document.getElementById("exercise").value.toLowerCase();
  let min = document.getElementById("minutes").value;

  if (exerciseDB[ex]) {
    let cal = exerciseDB[ex] * min;
    burntCalories += cal;
    document.getElementById("exerciseResult").innerText = `Exercise ${ex} ${min} min: ${cal} kcal burnt`;
    updateSummary();
  } else {
    document.getElementById("exerciseResult").innerText = "Exercise not found in database!";
  }
}

// Update Summary
function updateSummary() {
  let net = totalCalories - burntCalories;
  document.getElementById("summary").innerText = 
    `Calories Eaten: ${totalCalories.toFixed(1)} kcal
     | Calories Burnt: ${burntCalories.toFixed(1)} kcal
     | Net: ${net.toFixed(1)} kcal`;
}

function goBack() {
  document.getElementById("app").style.display = "none";
  document.getElementById("welcome").style.display = "flex"; // flex karna hai wapas center ke liye
}

const summaries = [
  "Stay hydrated – water is the fuel your body runs on.",
  "Eat more colors on your plate – they’re full of nutrients.",
  "Even a 15-minute walk daily can boost your mood and energy.",
  "Good sleep is as important as good food for a healthy body.",
  "A calm mind is a healthy mind – take 5 minutes to breathe deeply.",
  "Consistency beats intensity – small steps daily lead to big results.",
  "Fruits are nature’s candy – sweet and healthy at the same time.",
  "Calories burned today are an investment in tomorrow’s energy.",
  "Move more, sit less – motion is lotion for your body.",
  "Sunlight in the morning helps reset your body’s natural clock."
];

// DOM load hone ke baad run karne ke liye
window.onload = function() {
  const randomIndex = Math.floor(Math.random() * summaries.length);
  document.getElementById("daily-summary").innerText = summaries[randomIndex];
};


