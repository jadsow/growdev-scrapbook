const usuario = document.querySelector('#login-username');
const password = document.querySelector('#login-password');
let armazenamentoLocal = JSON.parse(localStorage.getItem('cadastros')) || [];
const erroLogin = document.querySelector('.erro-login');

function logar (event) {
    event.preventDefault();
    for (user of armazenamentoLocal) {
        if (usuario.value === user.username && password.value === user.password) {
            location.href = "recados.html";
        } 
        
        if (usuario.value.length <3) {
            erroLogin.innerHTML = 'Digite um usuário válido'
        } else {
            erroLogin.innerHTML = 'Revise suas informações'
        }
    } 
}