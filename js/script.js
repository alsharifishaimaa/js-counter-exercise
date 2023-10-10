//on a un element qui varie dans l'application ,c'ect le count
// donc on a cree un variable qui contient cette valeur 
// au demarage elle vaut 0
let currentValue = 0;
//on declare nos function
// mais elle ne seront excutees que si on l'apple

function changeColor() {
  if (currentValue<0) {
    document.getElementById("count").style.color= "red";
    
  } else if (currentValue>0) {
    document.getElementById("count").style.color= "green";
  } else if (currentValue==0) {
    document.getElementById("count").style.color="black";
  }
}

//function Increase
function setIncrease() {
    currentValue ++;
    changeColor();
    document.getElementById("count").innerHTML = currentValue;
  }
 
//function Decrease
  function setDecrease() {
    currentValue --;
   changeColor();
   document.getElementById("count").innerHTML = currentValue;  
  }

  
  // function Reset
  function setReset() {
    currentValue = 0;
    changeColor();
    document.getElementById("count").innerHTML = currentValue;
  }
  
  document.getElementById("soustraction").addEventListener("click", setDecrease);
  document.getElementById("ajout").addEventListener("click", setIncrease);
  document.getElementById("reinitialiser").addEventListener("click", setReset);



 



 
  

  

  
  
  
  
  
  