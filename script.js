// ==================================
// Part 1: Variables, Data Types, Conditionals
// ==================================
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = document.getElementById("ageInput").value; // variable
  let message = "";

  // conditional check
  if (age >= 18) {
    message = "✅ You are eligible to vote.";
  } else {
    message = "❌ Sorry, you are too young to vote.";
  }

  document.getElementById("ageResult").textContent = message;
});

// ==================================
// Part 2: Functions (Reusability)
// ==================================

// Function 1: Calculate total
function calculateTotal(a, b) {
  return a + b;
}

// Function 2: Format a string
function formatMessage(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}

document.getElementById("calcBtn").addEventListener("click", function () {
  let total = calculateTotal(10, 20); // using function
  document.getElementById("calcResult").textContent =
    "Total = " + total + " | " + formatMessage("Student");
});

// ==================================
// Part 3: Loops (Repetition)
// ==================================
document.getElementById("loopBtn").addEventListener("click", function () {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear list before regenerating

  // Example 1: for loop
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }

  // Example 2: while loop (countdown)
  console.log("Countdown:");
  let countdown = 3;
  while (countdown > 0) {
    console.log("⏳ " + countdown);
    countdown--;
  }
});

// ==================================
// Part 4: DOM Manipulation
// ==================================

// Example 1: Toggle a CSS class
document.getElementById("toggleBtn").addEventListener("click", function () {
  let text = document.getElementById("toggleText");
  text.classList.toggle("highlight");
});

// Example 2: Change text dynamically
document.getElementById("toggleText").addEventListener("mouseover", function () {
  this.textContent = "🌟 You're hovering over me!";
});

document.getElementById("toggleText").addEventListener("mouseout", function () {
  this.textContent = "Click the button to highlight me!";
});

// Example 3: Create a new element on the fly
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added using JavaScript!";
document.getElementById("part4").appendChild(newPara);
