
let pelo_link = document.getElementById("botao_pelo_link")
let pelo_texto = document.getElementById("botao_pelo_texto")
let controla_css_elemento = document.getElementById("conteudo_da_noticia")
let controla_css_input_titulo = document.getElementById("input_titulo")
let controla_css_input_link = document.getElementById("input_link")

pelo_link.addEventListener("click", function(){
    
    controla_css_elemento.style.display = "none"
    controla_css_input_titulo.style.display = "none"
    controla_css_input_link.style.display = "block"
} )


pelo_texto.addEventListener("click", function(){

    controla_css_elemento.style.display = "block"
    controla_css_input_titulo.style.display = "block"
    controla_css_input_link.style.display = "none"

} )