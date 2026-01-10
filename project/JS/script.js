/******** VARIABLES & DATA TYPES ********/
let numbers = [10, 20, 30, 40, 50];
let timer = 0;
let intervalId;

/******** OPERATORS + CONDITIONS ********/
function checkNumber() {
  let num = Number(document.getElementById("num").value);
  let result = document.getElementById("numResult");

  if (num > 0) {
    result.innerText = "Positive Number";
  } else if (num < 0) {
    result.innerText = "Negative Number";
  } else {
    result.innerText = "Zero";
  }
}

/******** LOOP ********/
function printLoop() {
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += i + " ";
  }
  document.getElementById("loopResult").innerText = output;
}

/******** MAP ********/
function useMap() {
  let doubled = numbers.map(n => n * 2);
  document.getElementById("arrayResult").innerText =
    "Map (x2): " + doubled.join(", ");
}

/******** FILTER ********/
function useFilter() {
  let filtered = numbers.filter(n => n > 25);
  document.getElementById("arrayResult").innerText =
    "Filter (>25): " + filtered.join(", ");
}

/******** REDUCE ********/
function useReduce() {
  let total = numbers.reduce((sum, n) => sum + n, 0);
  document.getElementById("arrayResult").innerText =
    "Reduce (Sum): " + total;
}

/******** CALCULATOR ********/
function add() {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  document.getElementById("calcResult").innerText = a + b;
}

function multiply() {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  document.getElementById("calcResult").innerText = a * b;
}

/******** TIMER ********/
function startTimer() {
  intervalId = setInterval(() => {
    timer++;
    document.getElementById("time").innerText = timer;
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

/******** localStorage ********/
function saveData() {
  let name = document.getElementById("username").value;
  localStorage.setItem("user", name);
  document.getElementById("storageResult").innerText =
    "Saved Name: " + localStorage.getItem("user");
}
