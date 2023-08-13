var colorMode = document.querySelector("#colorMode");
colorMode.onclick = function () {
  if (localStorage.getItem("colormode")) {
    console.log("owo");
  } else {
    localStorage.setItem("colormode",1)
    console.log("unu")
  }
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    colorMode.src = "Img/moon.png";
  } else {
    colorMode.src = "Img/sun.png";
  }
};
