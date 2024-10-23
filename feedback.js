function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var rating = document.getElementById("rating").value;
    var comments = document.getElementById("comments").value;

    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
    
    if (email === "") {
      alert("Please enter your email.");
      return false;
    }
    
    if (city === "") {
      alert("Please select a city.");
      return false;
    }
  
    if (rating === "0") {
      alert("Please give a rating.");
      return false;
    }
    
    if (comments === "") {
      alert("Please provide your comments.");
      return false;
    }

    alert("Thank you for your feedback!");
    return true;
  }
  
  function rateExperience(stars) {
    document.getElementById("rating").value = stars;

    var starsElem = document.getElementsByClassName("star");
    for (var i = 0; i < starsElem.length; i++) {
      starsElem[i].style.color = (i < stars) ? "gold" : "gray";
    }
  }