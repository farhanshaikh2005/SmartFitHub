// Page Navigation
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// BMI Calculator
function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value / 100; // cm to m
  let bmi = (weight / (height * height)).toFixed(2);
  let result = "Your BMI is " + bmi + " - ";

  if (bmi < 18.5) result += "Underweight";
  else if (bmi < 24.9) result += "Normal";
  else if (bmi < 29.9) result += "Overweight";
  else result += "Obese";

  document.getElementById("bmiResult").innerText = result;
}

// Calorie Calculator (BMR + activity)
function calculateCalories() {
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let weight = document.getElementById("calWeight").value;
  let height = document.getElementById("calHeight").value;
  let activity = document.getElementById("activity").value;

  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  let calories = (bmr * activity).toFixed(0);
  document.getElementById("calorieResult").innerText =
    "You need around " + calories + " calories/day";
}

// Daily Health Tips
const tips = [
  "💧 Stay hydrated – drink at least 8 glasses of water daily.",
  "🥗 Eat more greens – your body will thank you.",
  "🛌 A good night’s sleep heals the mind and body.",
  "🚶‍♂️ Take a 10-minute walk after meals for better digestion.",
  "😃 Smiling boosts your mood and reduces stress.",
  "🧘 A calm mind is a healthy mind – take 5 minutes to breathe deeply.",
  "⏰ Keep a routine – consistency builds healthy habits.",
  "🍎 An apple a day really does keep the doctor away.",
  "💪 Small daily exercises make a big difference over time.",
  "📵 Take a break from screens – give your eyes some rest."
];

function showTip() {
  const tipBox = document.getElementById("tipBox");
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipBox.textContent = tips[randomIndex];
}

document.addEventListener("DOMContentLoaded", showTip);
