async function criarConta (event) {
    event.preventDefault();

    const username = document.querySelector ('#create-username');
    const userpassword = document.querySelector ('#password');
    const repeatuserpassword = document.querySelector ('#repeat-password');
    const succesStatus = 201;
    const aviso = document.querySelector('#aviso');

    const user = {
        nome: username.value,
        senha: userpassword.value,
    }

    if (userpassword.value !== repeatuserpassword.value){
        return aviso.innerHTML = 'Suas senhas não coincidem'
    }  
    
    if (!username.value || !userpassword.value || !repeatuserpassword.value){
        return aviso.innerHTML = 'Insira seus dados'
    }
    
    const {status, data} = await axios.post('https://trabalhofinal-jadson-api.herokuapp.com/cadastro', user);

    if (succesStatus != status) {
        return aviso.innerHTML = 'Usuário já cadastrado'
    }
    
    if (succesStatus === status) {
        data.nome = user.nome;
        data.senha = user.senha;
        return aviso.innerHTML = 'Usuário cadastrado'
    }
}














