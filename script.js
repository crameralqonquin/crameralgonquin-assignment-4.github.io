// inputs the equation for converting Celcius to Fahrenheit
function calculateTemp() {
   function celToFah(celsius) {
      var fahrenheit = Math.round((celsius * (9/5)) + 32);
      return fahrenheit;
   }

// inputs the equation for converting Fahrenheit to Celcius
   function fahToCel(fahrenheit) {
      var celsius = Math.round((fahrenheit - 32) * (5/9));
      return celsius;
   }

// checks if Celsius or Fahrenheit is selected
   var tempSelected = document.getElementById("temp_diff");
   var valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

// checks the value inside the temperature input
   var numberTemp = document.getElementById("temp").value;

   var result;
   
   if (valueTemp == 1) {
      result = celToFah(numberTemp);
      document.getElementById("resultContainer").innerHTML = "The equivalent temperature in degrees Fahrenheit is " + result + "°";
   } else {
      result = fahToCel(numberTemp);
      document.getElementById("resultContainer").innerHTML = "The equivalent temperature in degrees Celsius is " + result + "°";
   }
}
