const chk = document.getElementById('chk')

chk.addEventListener('change',() => {
    document.body.classList.toggle('dark');
})

const fotos = ["./assets/logo-cafe-e-conforto-creme-semfrase.png", "./assets/logo-cafe-e-conforto-preto-semfrase.png"];
const arrowRight = ["./assets/arrow-right-creme.png", "./assets/arrow-right.svg"];
let n = 0;

function trocar() {
    document.getElementById("inicio").src = fotos[n];
    document.getElementById("logofinal").src = fotos[n];
    for (var i = 0; i <  document.getElementsByClassName("setaDireita").length; i++) {
        document.getElementsByClassName("setaDireita")[i].src = arrowRight[n]
    }
    n++;
    if (n >= fotos.length) {
        n = 0;
    }
};