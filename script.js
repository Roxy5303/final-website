function validate() {
  let name = document.forms["myForm"]["vname"].value;
  let email = document.forms["myForm"]["vemail"].value;
  let message = document.forms["myForm"]["vmsg"].value;
  let address = document.forms["myForm"]["vaddress"].value;
  let postcode = document.forms["myForm"]["vpostcode"].value;
  let city = document.forms["myForm"]["vcity"].value;
  let rate = document.forms["myForm"]["rate"].value;
  let province = document.forms["myForm"]["vprovince"].value;
  let cpost =
    /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] ?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i;

  //validate every field
  if (name == "") {
    alert("First Name is required");
    return false;
  }
  if (email == "") {
    alert("Email is required");
    return false;
  }
  if (message == "") {
    alert("Message is required");
    return false;
  }
  if (postcode == "") {
    alert("Postal Code is required");
    return false;
  }
  if (address == "") {
    alert("Address is required");
    return false;
  }
  if (city == "") {
    alert("City is required");
    return false;
  }

  if (province == "") {
    alert("Province is required");
    return false;
  }

  if (flag == 1 && rate == "") {
    alert("Rate is required");
    return false;
  }

  if (!cpost.test(postcode)) {
    alert("Postal Code is valid");
    return false;
  }
}

function Hourlyrate(z) {
  if (z == 0) {
    flag = 1;
    document.querySelector("#rate").style.display = "block";
    document.querySelector("hrate").style.display = "block";
  } else {
    flag = 0;
    document.querySelector("#rate").style.display = "none";
    document.querySelector("#hrate").style.display = "none";
  }
  return;
}

function openMenu() {
  var x = document.getElementById("menu-mobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
