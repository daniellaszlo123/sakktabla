window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}


function init() {
    $("footer p")[0].innerHTML="Dániel László";
    $("footer p")[0].style.textAlign="center";
    $("footer p")[0].style.fontSize="20px";

    var kepTomb=$("#bal img");
    for (let i = 0; i < kepTomb.length; i++) {
        kepTomb[i].addEventListener("click", kepEleresiUt);
    }

    for (let i = 0; i < kepTomb.length; i++) {
        kepTomb[i].addEventListener("mouseover", stilusFel);
        kepTomb[i].addEventListener("mouseout", stilusLe);
    }
}

function stilusFel(event) {
    event.target.className="kiemel";
}

function stilusLe(event) {
    event.target.className="";
}

var tomb=[];
function kepEleresiUt(event) {
    tomb.push(event.target.alt); //event.target az adott elemre hivatkozik/ lekéri a kiváltó esemény elemét
    console.log(tomb);

    event.target.style.display="none";
    var kep=`<img src="${event.target.src}" alt="${event.target.alt}"/>`;

    ID("csonak").innerHTML+=kep;
    // ha már rákattintottunk akkor többször már ne lehessen kattintani
    if (tomb.indexOf("kecske")>=0 && tomb.indexOf("farkas")>=0) {
        alert("Nem jó választás!")
    }
    event.target.removeEventListener("click", kepEleresiUt);
}


