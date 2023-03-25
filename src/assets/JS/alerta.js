exports.alertaokgi = function (msg, color, tiempo) {
  if (color === "success") {
    color = "#4eca7d";
  }

  if (color === "error") {
    color = "#ff1919";
  }

  if (color === "info") {
    color = "#4e98ca";
  }

  const al = document.getElementById("alert");
  al.innerText = msg;

  document.getElementsByClassName("okalert")[0].style = "opacity: 1;";
  document.getElementById(
    "alert"
  ).style = `position: relative; left: 0px; transition: left 550ms; background-color: ${color};`;
  setTimeout(alertaokgo, tiempo);

  function alertaokgo() {
    document.getElementById(
      "alert"
    ).style = `position: relative; left: 700px; transition: left 550ms;  background-color: ${color};`;
    setTimeout(out, 1000);

    function out() {
      document.getElementsByClassName("okalert")[0].style = "opacity: 0;";
    }
  }
};
