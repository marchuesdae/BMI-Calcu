function success() {
  var rWeight= document.getElementById("weight").value;
  var rHeight = document.getElementById("height").value;

  var bmi = rWeight / ((rHeight / 100) * (rHeight / 100));
   var result = document.getElementById('result');
result.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);

if ( rWeight <= 0 || rHeight <= 0) {
  alert('Invalid Input');
}
  else if(bmi < 18.5){
  result.innerHTML += '<br>Underweight';
} else if (bmi < 25) {
  result.innerHTML += '<br>Normal weight';
} else if (bmi < 30) {
  result.innerHTML += '<br>Overweight';
} else {
  result.innerHTML += '<br>Obese';
}

}
