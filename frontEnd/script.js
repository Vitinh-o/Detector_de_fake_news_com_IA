
let pelo_link = document.getElementById("botao_pelo_link")
let pelo_texto = document.getElementById("botao_pelo_texto")

console.log(pelo_link)

function acionar_esconder_css(botao){

    let controla_css_textarea = document.getElementById("conteudo_da_noticia")
    let controla_css_input_titulo = document.getElementById("input_titulo")
    let controla_css_input_link = document.getElementById("input_link")

    let display_textarea = "none"
    let display_titulo = "none"

    if(botao == pelo_texto){

        let  display_textarea = "hidden"
        let  display_titulo = "hidden"
    } 


    botao.addEventListener("click", function(){
        
        controla_css_elemento.style.display = display_textarea

    
    
    } )


} 




pelo_link.addEventListener("click", function(){

    let controla_css_elemento = document.getElementById("conteudo_da_noticia")

    console.log(controla_css_elemento)

    controla_css_elemento.style.display = "none"


} )