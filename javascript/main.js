function brown() {
  document.querySelector("#car-div").innerHTML =
    "<img src='img/brown.png'  class='choosen-car'>";

  infoCar(browninfo());
}

function green() {
  document.querySelector("#car-div").innerHTML =
    "<img src='img/green.jpg'  class='choosen-car'>";
  infoCar(greeninfo());
}

function purple() {
  document.querySelector("#car-div").innerHTML =
    "<img src='img/purple.png'  class='choosen-car'>";
  infoCar(purpleinfo());
}

function yellow() {
  document.querySelector("#car-div").innerHTML =
    "<img src='img/yellow.png'  class='choosen-car'/>";
  infoCar(yellowinfo());
}

function start() {
  document.querySelector(".choosen-car").style.animation =
    "start 10s ease-in-out infinite";
  document.querySelector("h1").innerHTML = "Avtomobil hərəkətə başladı.";
}

function stop() {
  document.querySelector(".choosen-car").style.animation = "none";

  document.querySelector("h1").innerHTML = "Avtomobil hərəkəti dayandırdı.";
}

function infoCar(par) {
  return par;
}

function browninfo() {
  var brown = {
    color: "Brown",
    year: 2010,
    price: "38000$",
  };

  document.querySelector("h2").innerHTML =
    "Color: " +
    brown.color +
    " / " +
    "Year: " +
    brown.year +
    " / " +
    "Price: " +
    brown.price;
}

function greeninfo() {
  var green = {
    color: "Green",
    year: 2008,
    price: "50000$",
  };

  document.querySelector("h2").innerHTML =
    "Color: " +
    green.color +
    " / " +
    "Year: " +
    green.year +
    " / " +
    "Price: " +
    green.price;
}

function purpleinfo() {
  var purple = {
    color: "Purple",
    year: 2002,
    price: "24000$",
  };

  document.querySelector("h2").innerHTML =
    "Color: " +
    purple.color +
    " / " +
    "Year: " +
    purple.year +
    " / " +
    "Price: " +
    purple.price;
}

function yellowinfo() {
  var yellow = {
    color: "Yellow",
    year: 2015,
    price: "72000$",
  };

  document.querySelector("h2").innerHTML =
    "Color: " +
    yellow.color +
    " / " +
    "Year: " +
    yellow.year +
    " / " +
    "Price: " +
    yellow.price;
}
