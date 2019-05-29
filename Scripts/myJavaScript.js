function changeImage(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

function onHelloClicked(){
  alert("hello");
}

function onGoodbyeClicked(){
  alert("Goodbye");
}

function onNoYouClicked(){
  alert("NO YOU!");
}

function changeTextColorRed(){
  var x = document.getElementsByClassName("testbtn");
  var i;
  for (i = 0; i < x.length; i++)
  {
    x[i].style.backgroundColor = "red";
  }
}

function changeTextColorGreen(){
  var x = document.getElementsByClassName("testbtn");
  var i;
  for (i = 0; i < x.length; i++)
  {
    x[i].style.backgroundColor = "green";
  }
}

function changeNavButtonColor(){
  var x = document.getElementsByClassName("navlink");
  x.style.backgroundColor = "red";
}