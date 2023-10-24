function CelsiuToFa(){
   
    const celsiu = document.querySelector("[data-celsiu]").value
    const conversao = (celsiu * 1.8 + 32.).toFixed(2)
    var html = document.querySelector("[data-3]")
    const htmlFinal = html.innerHTML = `${celsiu} C  são ${conversao} F`
    var img = window.document.getElementById('imagem')

    if(conversao != null && conversao < 62 ){
    img.src = 'img/imagem_frio.png'
    document.body.style.background = 'rgb(181, 232, 248)'
   

} else if(conversao >= 62 && conversao <= 77){
    img.src = 'img/imagem_fresco.png'
    document.body.style.background = 'rgb(0, 189, 247)'

   
 

} else{
    img.src = 'img/imagem_sol.png'
    document.body.style.background = 'rgb(233, 163, 58)'

}
}
  
const botao = document.querySelector("[data-botao]")

botao.addEventListener("click", evento => CelsiuToFa())







