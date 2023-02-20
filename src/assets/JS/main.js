    const linea = document.getElementById('linea');

    const cartel = document.getElementById('mic');
    const cont = document.getElementById('micc');

cartel.addEventListener("click", () =>{
    cartel.classList.toggle("activado");
    cont.classList.toggle("oculto");

    cartel1.classList.remove("activado");
    cont1.classList.remove("oculto");
    cartel2.classList.remove("activado");
    cont2.classList.remove("oculto");
    cartel3.classList.remove("activado");
    cont3.classList.remove("oculto");

    linea.classList.toggle("lineapri")
});

    const cartel1 = document.getElementById('pyc');
    const cont1 = document.getElementById('pycc');

cartel1.addEventListener("click", () =>{
    cartel1.classList.toggle("activado");
    cont1.classList.toggle("oculto");

    cartel.classList.remove("activado");
    cont.classList.remove("oculto");
    cartel2.classList.remove("activado");
    cont2.classList.remove("oculto");
    cartel3.classList.remove("activado");
    cont3.classList.remove("oculto");

    linea.classList.toggle("lineasec")
});

    const cartel2 = document.getElementById('arc');
    const cont2 = document.getElementById('arcc');

cartel2.addEventListener("click", () =>{
    cartel2.classList.toggle("activado");
    cont2.classList.toggle("oculto");

    cartel1.classList.remove("activado");
    cont1.classList.remove("oculto");
    cartel.classList.remove("activado");
    cont.classList.remove("oculto");
    cartel3.classList.remove("activado");
    cont3.classList.remove("oculto");

    linea.classList.toggle("lineapri")
});

const cartel3 = document.getElementById('qbas');
const cont3 = document.getElementById('qbass');

cartel3.addEventListener("click", () =>{
    cartel3.classList.toggle("activado");
    cont3.classList.toggle("oculto");

    cartel1.classList.remove("activado");
    cont1.classList.remove("oculto");
    cartel2.classList.remove("activado");
    cont2.classList.remove("oculto");
    cartel.classList.remove("activado");
    cont.classList.remove("oculto");

    linea.classList.toggle("lineasec")
});

const proyecto = document.getElementsByClassName('adms');
const proyecto2 = document.getElementsByClassName('admscart');

proyecto[0].onmouseover= function(){
    proyecto2[0].classList.add("admscarton")
    console.log("aaa")
};

proyecto[0].onmouseout= function(){
    proyecto2[0].classList.remove("admscarton")
};


const modalx = document.getElementsByClassName("modal__cointainer_x");
const modalcont = document.getElementsByClassName("modal");
const workbtn = document.getElementsByClassName("workbtn");

modalx[0].addEventListener("click", () =>{
    modalcont[0].classList.remove("modal__cointainer_close");
    document.getElementsByTagName("body")[0].style = "overflow: visible;"
    document.getElementsByClassName("modal__cointainer")[0].style = "position: relative; bottom: 800px; transition: bottom 350ms;"
});

for (i = 0; i < workbtn.length; i++) {
    workbtn[i].addEventListener("click", () =>{
        modalcont[0].classList.add("modal__cointainer_close");
        document.getElementsByTagName("body")[0].style = "overflow: hidden;"
        document.getElementsByClassName("modal__cointainer")[0].style = "position: relative; bottom: 0px; transition: bottom 450ms;"
    });
}

document.getElementsByClassName("ico")[0].addEventListener("click", () =>{

    navigator.clipboard.writeText("renzomagnoni203@gmail.com");
    alertaokgi();

});

document.getElementsByClassName("ico")[1].addEventListener("click", () =>{
    window.open('http://www.instagram.com/renzomag', '_blank');
});

function alertaokgi() {
    document.getElementsByClassName("okalert")[0].style = "opacity: 1;"
    document.getElementById("alert").style = "position: relative; left: 0px; transition: left 550ms;"
    setTimeout(alertaokgo, 2500);

    function alertaokgo(){
        document.getElementById("alert").style = "position: relative; left: 300px; transition: left 550ms;"
        setTimeout(out, 550);

        function out() {
            document.getElementsByClassName("okalert")[0].style = "opacity: 0;"
        }
    }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 300;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", () =>{

  reveal();

  if (window.pageYOffset > 756) {
    document.getElementsByClassName("nbcont")[0].style = "position: fixed; background: linear-gradient(180deg, rgba(26,36,48,1) 89%, rgba(255,255,255,0.3) 100%);"
    document.getElementById("pipp").style = "position: relative; bottom: 3px;"
  } else{
    document.getElementsByClassName("nbcont")[0].style = "position: ; background: rgb(26,36,48);"
    document.getElementById("pipp").style = "position: relative; bottom: 0px;"
  }

/* Englobar todo en un mismo if para detectar si es mayor o menor a la resolución */

if (window.innerWidth >= 1151) {
    if (window.pageYOffset < 300) {
      document.getElementById("inn").style = "color: #d51c6c;"
    } else {
      document.getElementById("inn").style = "color: white;"
    }
  }

if (window.innerWidth >= 1151) {
    if (window.pageYOffset < 1900 && window.pageYOffset > 299) {
      document.getElementById("abb").style = "color: #d51c6c; font-weight: 600 !important;"
    } else {
      document.getElementById("abb").style = "color: white;"
    }
}

if (window.innerWidth >= 1151) {
    if (window.pageYOffset > 1898 && window.pageYOffset < 2700) {
      document.getElementById("hiss").style = "color: #d51c6c; font-weight: 600 !important;"
    } else {
      document.getElementById("hiss").style = "color: white;"
    }
}

if (window.innerWidth >= 1151) {
    if (window.pageYOffset > 2698 && window.pageYOffset < 3368) {
      document.getElementById("exx").style = "color: #d51c6c; font-weight: 600 !important;"
    } else {
      document.getElementById("exx").style = "color: white;"
    }
}

if (window.innerWidth >= 1151) {
    if (window.pageYOffset > 3368) {
      document.getElementById("contt").style = "color: #d51c6c; font-weight: 600 !important;"
    } else {
      document.getElementById("contt").style = "color: white;"
    }
}

  /* Colores navbar despues de resizing */

if (window.innerWidth <= 1150) {
    if (window.pageYOffset < 146) {
      document.getElementById("inn").style = "color: #d51c6c;"
    } else {
      document.getElementById("inn").style = "color: white;"
    }
}

if (window.innerWidth <= 1150) {
    if (window.pageYOffset < 3480 && window.pageYOffset > 144) {
      document.getElementById("abb").style = "color: #d51c6c; font-weight: 600 !important;"
    } else {
      document.getElementById("abb").style = "color: white;"
    }
}

if (window.innerWidth <= 1150) {
    if (window.pageYOffset > 3478 && window.pageYOffset < 4280) {
      document.getElementById("hiss").style = "color: #d51c6c; font-weight: 600 !important;"
    } else {
      document.getElementById("hiss").style = "color: white;"
    }
}

if (window.innerWidth <= 1150) {
    if (window.pageYOffset > 4278 && window.pageYOffset < 5198) {
      document.getElementById("exx").style = "color: #d51c6c; font-weight: 600 !important;"
    } else {
      document.getElementById("exx").style = "color: white;"
    }
}

if (window.innerWidth <= 1150) {
    if (window.pageYOffset > 5200) {
      document.getElementById("contt").style = "color: #d51c6c; font-weight: 600 !important;"
    } else {
      document.getElementById("contt").style = "color: white;"
    }
}
})
