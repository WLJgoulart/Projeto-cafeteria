/* Logica de programação. 
   [x] saber quando o usuário clicou no botão 
   [x] Mudar o posicionamento Modal 
   [x] Fazer a mascara ficar visível 
   []quando clicar na mascara, fechar o Modal
   */

const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

function mostrarModal  () {
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function esconderModal(){
    modal.style.left = '-35%'
    mascara.style.visibility = 'hidden'
}

