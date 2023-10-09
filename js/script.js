let currentValue = 0;

function setIncrease() {
    currentValue = currentValue +1;
    document.getElementById("count").innerHTML = currentValue;
  }
  document.getElementById("ajout").addEventListener("click", setIncrease);
  

  function setDecrease() {
    currentValue = currentValue -1;
    document.getElementById("count").innerHTML = currentValue;
  }
  document.getElementById("soustraction").addEventListener("click", setDecrease)
  
  function setReset() {
    currentValue = 0;
    document.getElementById("count").innerHTML = currentValue;
  }
  document.getElementById("réinitialiser").addEventListener("click", setReset)

  function displayValue() {
    if (value < 0) {
    document.getElementById(“value”).style.color = "red";
    } else if (value > 0) {
    document.getElementById(“value”)..style.color = "green";
    } else {
    document.getElementById(“value”).style.color = "black";
    }
    document.getElementById(“value”).textContent = value;
    }
  
 
  

  

  
  
  
  
  
  