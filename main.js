const botaoOpenCookies = document.querySelector('.btn-opencookies')
const imgDoBiscoito = document.querySelector('.img-biscoito')
const caixaPrincipal = document.querySelector('.caixa-principal')
const caixaPrincipaldeMsg = document.querySelector('.caixa-principal-msg')
let numeroAleatorio;

botaoOpenCookies.addEventListener('click', ()=> {
  caixaPrincipal.classList.remove('hide')
  caixaPrincipaldeMsg.classList.add('hide')
  numeroAleatorio = Math.round((Math.random() * 10))
})

window.addEventListener('keydown', event => {
  if(event.key == 'Enter'){
    caixaPrincipal.classList.add('hide')
    caixaPrincipaldeMsg.classList.remove('hide')
  }
})

imgDoBiscoito.addEventListener('click', ()=> {
  caixaPrincipal.classList.add('hide')
  caixaPrincipaldeMsg.classList.remove('hide')
})