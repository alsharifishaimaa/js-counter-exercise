let currentValue = 0;

function setIncrease() {
    currentValue = currentValue +1;
    document.getElementById("count").innerHTML = currentValue;
  }
  document.getElementById("ajout").addEventListener("click", setIncrease)
  

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
  
 
  

  

  
  
  
  
  
  