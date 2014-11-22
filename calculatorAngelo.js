window.onLoad(){
 (function(){
  alert("loaded");

  var leftNum, rightNum, operator = "";
  var display = document.getElementById("result_display_value").innerHTML = "1";
  
  var input = function{
    var num1 = document.querySelector("#num_1").onclick = function(){
      alert(this.innerHTML);
      leftNum += this.innerHTML;
      display.innerHTML = leftNum;
    };
    var num2 = document.querySelector("#num_2").onclick = function(){
      alert(this.innerHTML);
      leftNum += this.innerHTML;
      display.innerHTML = leftNum;
    };
    var num3 = document.querySelector("#num_3").onclick = function(){
      alert(this.innerHTML);
      leftNum += this.innerHTML;
      display.innerHTML = leftNum;
    };
    var num4 = document.querySelector("#num_4").onclick = function(){
      alert(this.innerHTML);
      leftNum += this.innerHTML;
      display.innerHTML = leftNum;
    };
    var num5 = document.querySelector("#num_5").onclick = function(){
      alert(this.innerHTML);
      leftNum += this.innerHTML;
      display.innerHTML = leftNum;
    };
    var num6 = document.querySelector("#num_6").onclick = function(){
      alert(this.innerHTML);
      leftNum += this.innerHTML;
      display.innerHTML = leftNum;
    };
    var num7 = document.querySelector("#num_7").onclick = function(){
      alert(this.innerHTML);
      leftNum += this.innerHTML;
      display.innerHTML = leftNum;
    };
    var num8 = document.querySelector("#num_8").onclick = function(){
      alert(this.innerHTML);
      leftNum += this.innerHTML;
      display.innerHTML = leftNum;
    };
    var num9 = document.querySelector("#num_9").onclick = function(){
      alert(this.innerHTML);
      leftNum += this.innerHTML;
      display.innerHTML = leftNum;
    };


  };
  };) 
};