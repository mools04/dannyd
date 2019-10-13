var i = 0;      // Start Point
var images = [];  // Images Array
var time = 3000;  // Time Between Switch
   
// Image List
images[0] = "danny1.jpg";
images[1] = "danny2.jpg";
images[2] = "danny3.jpg";
images[3] = "danny4.jpg";

// Change Image
function changeImg(){
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if(i < images.length - 1){
    // Add 1 to Index
    i++; 
  } else { 
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

function button(){
	alert("Because he's hot AF");
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
