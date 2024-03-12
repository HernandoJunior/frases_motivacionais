//Variaveis da aplicação
let quotes = [
  'Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão. Autor desconhecido.',

  'Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!',

  'A gratidão é uma grande aliada do sucesso!',

  'Só tenho gratidão por tudo o que enfrentei até chegar aqui. E também muita esperança no coração por todos os desafios que ainda virão!',

  'Vamos agradecer aos idiotas. Não fosse por eles não faríamos tanto sucesso.',

  'A melhor maneira de agradecer por um belo momento é desfrutá-lo plenamente.',

  'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',

  'A melhor maneira de agradecer por um belo momento é desfrutá-lo plenamente.',

  'Feliz de quem recebeu do céu um pedaço de pão e não precisa de agradecer a ninguém além do próprio céu.',

  'A gratidão é o único tesouro dos humildes.',

  'As pessoas felizes lembram o passado com gratidão, alegram-se com o presente e encaram o futuro sem medo.'
]
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const mainClass = document.querySelector("main")
const menssageStart = document.getElementById("menssageStart")

const btnTry = document.getElementById("fortune-cookie")
const btnAgain = document.getElementById("btnAgain")

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleTryClick)

//Funções callback
function handleTryClick(){
  toggleClass()
let random = Math.round(Math.random() * 10)
  
  if (screen1.classList.contains('hide')){
    menssageStart.innerHTML = quotes[random]
  }
}

function toggleClass(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
  mainClass.classList.toggle('mainClass')
}

