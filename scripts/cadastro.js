function criarConta (event) {
    event.preventDefault();

    let usuarios = JSON.parse (localStorage.getItem ('cadastros')) || []
    let username = document.querySelector ('#create-username');
    let userpassword = document.querySelector ('#password');
    let repeatuserpassword = document.querySelector ('#repeat-password')

    for (user of usuarios) {
        if (user.username === username.value) {
            return document.querySelector('#erro').innerHTML = 'Usuário já cadastrado';
        }
    }

    if (username.value.length <3 || userpassword.value.length <3 || repeatuserpassword.value.length <3) {
        return document.querySelector('#erro').innerHTML = 'Por favor, revise suas informações';
    }

    if (userpassword.value != repeatuserpassword.value) {
        document.querySelector('#erro').innerHTML = 'Suas senhas não coincidem';
    } else {
        document.querySelector('#erro').innerHTML = 'Usuário cadastrado';
        let usuario = {
            username: username.value,
            password: userpassword.value,
            repeatPassword: repeatuserpassword.value 
        }
    
        usuarios.push(usuario);
    
        localStorage.setItem('cadastros', JSON.stringify(usuarios))
    }
}














