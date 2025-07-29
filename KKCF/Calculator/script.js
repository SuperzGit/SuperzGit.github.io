function calculate() {
  // Get the values from the input fields on the page and convert them to numbers
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var num3 = Number(document.getElementById("num3").value);
  var operator = document.getElementById("operator").value;
  var operator2 = document.getElementById("operator2").value;
  
  var result;
  var result2;
  // Perform calculation based on the selected operator
  if (operator === "+") {
    result = num1 + num2; // Addition
  } else if (operator === "-") {
    result = num1 - num2; // Subtraction
  } else if (operator === "*") {
    result = num1 * num2; // Multiplication
  } else if (operator === "/") {
    result = num1 / num2; // Division
  } else if (operator === "%") {
    result = num1 % num2; // Modulus (remainder)
  } else {
    result = "Invalid operator"; // Handle unexpected operator input
  }

  if (operator2 === "+") {
    result2 = result + num3; // Addition
  } else if (operator2 === "-") {
    result2 = result - num3; // Subtraction
  } else if (operator2 === "*") {
    result2 = result * num3; // Multiplication
  } else if (operator2 === "/") {
    result2 = result / num3; // Division
  } else if (operator2 === "%") {
    result2 = result % num3; // Modulus (remainder)
  } else {
    result2 = "Invalid operator"; // Handle unexpected operator input
  }
  // Display the result on the page inside the element with id "result"
  document.getElementById("result").innerText = "Result: " + result2;
}
