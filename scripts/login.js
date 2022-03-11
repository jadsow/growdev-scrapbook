async function logar (event) {
    event.preventDefault();
    const usuario = document.querySelector('#login-username').value;
    const password = document.querySelector('#login-password').value;
    const statusSuccess = 200;
    const erroLogin = document.querySelector('.erro-login');
    
    
    if (!usuario) {
        erroLogin.innerHTML = 'Usuário não encontrado';
    }

    const user = {
        nome: usuario,
        senha: password,
    };

    const {status, data} = await axios.post ('https://trabalhofinal-jadson-api.herokuapp.com/logar', user);

    if (status === statusSuccess) {
        localStorage.setItem('usuario', JSON.stringify(data))
        location.href="./recados.html"
    } else {
        erroLogin.innerHTML = 'Usuário não encontrado';
    }

}