// Case sensitive - maiusculas e minusculas importam
/*
variaveis:
var gusta = (não é mt utilizado atualmente)
let gusta = variavel classica
const gusta=
*/

// PEGAR COMPONENTES DA TELA!
//DOM é tudo renderizado em sigla. (Document Object Manager)

/* let texto = getElementByTagname(h1)
let menu = getElementById('#menu')
let classe = getElementsByClassName('.classe')
let nome = getElementByName('nome')
let Caruso = querySelector('.caruso')
texto = "batatinha" */


/* let titulo = document.querySelector ('#titulo') */

let nome = document.getElementById('nome') // get especifico do id não precisa de #
let email = window.document.getElementById('email') // "window" antes do document ajuda a completar os comandos
let assunto = window.document.querySelector('#assunto') // querySelector precisa da //#endregion

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido - Digite um nome válido."
        txtNome.style.color = "red"
    }
    else {
        txtNome.innerHTML = ""
        txtNome.style.color = "green"
    }
}

function ValidateEmail(email) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length < 4) {
        txtAssunto.innerHTML = "Mínimo de 4 caracteres necessários!"
        txtAssunto.style.color = "red"
    }
    else {
        txtAssunto.innerHTML = ""
        txtAssunto.style.color = "green"
    }
}