window.onload = function() {
  var buttons = document.querySelectorAll(".button");
  var resultWindow = document.querySelectorAll("#result_display_value");
  
  var numOne = document.getElementById("num_1"),
      numTwo = document.getElementById("num_2"),
      numThree = document.getElementById("num_3"),
      numFour = document.getElementById("num_4"),
      numFive = document.getElementById("num_5"),
      numSix = document.getElementById("num_6"),
      numSeven = document.getElementById("num_7"),
      numEight = document.getElementById("num_8"),
      numNine = document.getElementById("num_9"),
      numZero = document.getElementById("num_0"),
      display = document.getElementById("result_display_value"),
      operator_display = document.getElementById("operator_display"),
      leftNum = "",
      op = "";
  
  numOne.onclick = function () {
    display.innerHTML += "1";
  };
  
  numTwo.onclick = function () {
    display.innerHTML += "2";
  };
  
  numThree.onclick = function () {
    display.innerHTML += "3";
  };
  
  numFour.onclick = function () {
    display.innerHTML += "4";
  };
  
  numFive.onclick = function () {
    display.innerHTML += "5";
  };
  
  numSix.onclick = function () {
    display.innerHTML += "6";
  };
  
  numSeven.onclick = function () {
    display.innerHTML += "7";
  };
  
  numEight.onclick = function () {
    display.innerHTML += "8";
  };
  
  numNine.onclick = function () {
    display.innerHTML += "9";
  };
  
  numZero.onclick = function () {
    display.innerHTML += "0";
  };
  
  
  var divide = document.getElementById("divide"),
      multiply = document.getElementById("multiply"),
      add = document.getElementById("add"),
      subtract = document.getElementById("subtract"),
      clear = document.getElementById("clear"),
      enter = document.getElementById("enter");
  
  divide.onclick = function () {
    operator_display.innerHTML = "/";
    leftNum = Number(display.innerHTML);
    display.innerHTML = "";
    op = operator_display.innerHTML;
    console.log(op);
    console.log(leftNum);
  };
  
  multiply.onclick = function () {
    operator_display.innerHTML = "*";
    leftNum = Number(display.innerHTML);
    display.innerHTML = "";
    op = operator_display.innerHTML;
    console.log(op);
    console.log(leftNum);
  };
  
  add.onclick = function () {
    operator_display.innerHTML = "+";
    leftNum = Number(display.innerHTML);
    display.innerHTML = "";
    op = operator_display.innerHTML;
    console.log(op);
    console.log(leftNum);
  };
  
  subtract.onclick = function () {
    operator_display.innerHTML = "-";
    leftNum = Number(display.innerHTML);
    display.innerHTML = "";
    op = operator_display.innerHTML;
    console.log(op);
    console.log(leftNum);
  };
  
  clear.onclick = function () {
    operator_display.innerHTML = "";
    leftNum = "";
    display.innerHTML = "";
    op = "";
  };
  
  enter.onclick = function () {
    var result = "";
    
    switch(op) {
      case "+":
        result = addition(leftNum, Number(display.innerHTML));
        console.log(addition(leftNum, Number(display.innerHTML)));
        break;
        
      case "-":
        result = subtraction(leftNum, Number(display.innerHTML));
        console.log(subtraction(leftNum, Number(display.innerHTML)));
        break;
        
      case "*":
        result = multiplication(leftNum, Number(display.innerHTML));
        console.log(multiplication(leftNum, Number(display.innerHTML)));
        break;
        
      case "/":
        result = division(leftNum, Number(display.innerHTML));
        console.log(division(leftNum, Number(display.innerHTML)));
        break;
    }
  display.innerHTML = result;
  };
  
  addition = function(x, y){
  return x + y;
  };

  subtraction = function(x, y){
    return x - y;
  };

  division = function(x, y){
    return x / y;
  };

  multiplication = function(x, y){
    return x * y;
  };
  
};