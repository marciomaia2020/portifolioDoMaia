// My slides
.mySlides {display:none;}

// Script to show Learn Languages
function openitem(itemName) {
  var i;
  var x = document.getElementsByClassName("item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(itemName).style.display = "block";  
}

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
 // Script for my certificates
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
  x.className += " w3-show";
  } else {
  x.className = x.className.replace(" w3-show", "");
  }
}
//Menu Acordion - Seção Malwares Virus se proteja
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
  }
