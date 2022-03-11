const usuarios = JSON.parse(localStorage.getItem('usuario'));

async function adicionarRecado () {
    const valorPrioridade = document.querySelector('#prioridade-recado');
    const descricaoRecado = document.querySelector('#descricao-recado');
    const statusSuccess = 201;

    let conteudo = {
        prioridade : valorPrioridade.value,
        recado : descricaoRecado.value,
    }

    const {status, data} = await axios.post(`https://trabalhofinal-jadson-api.herokuapp.com/cadastro/${usuarios.id}/adicionar-recados`, conteudo);


    if (statusSuccess === status) {
        const exibirConteudo = document.querySelector('#linhas-tabela')

        data.prioridade = conteudo.prioridade;
        data.recado = conteudo.recado;
        
        exibirConteudo.innerHTML += `<td>${data.prioridade}</td> 
                                     <td>${data.recado}</td>
                                        <td><input type="button" value="Remover" placeholder="remover"></input>
                                        <input type="button" value="Editar" placeholder="editar"></input>
                                    </td>`;
    }

    exibirRecados ()

}

async function exibirRecados () {
    const {status, data} = await axios.get (`https://trabalhofinal-jadson-api.herokuapp.com/buscar-usuario/${usuarios.id}`);
    const statusSuccess = 200;
    const exibirConteudo = document.querySelector('#linhas-tabela')
    exibirConteudo.innerHTML = ''
    if (status === statusSuccess) {
        data.recados.map(item => {
            exibirConteudo.innerHTML += `<td>${item.prioridade}</td>
                                         <td>${item.recado}</td>
                                         <td><input type="button" value="Remover" placeholder="remover" onclick="deletarRecados(${data.id}, ${item.id})" id="apagar"></input>
                                         <input type="button" value="Editar" placeholder="editar" onclick="editarRecados(${data.id}, ${item.id})" id="editar"></input>   
                                        `;
        });
    }
}

async function deletarRecados (id, idRecado) {

    await axios.delete(`https://trabalhofinal-jadson-api.herokuapp.com/cadastro/${id}/remover-recados/${idRecado}`, {
        method: 'DELETE'
    })

    exibirRecados ()
}

async function editarRecados (id, idRecado) {
    const novoRecado = prompt('Novo recado');
    const novaPrioridade = prompt('Nova prioridade');

    const recadoAlterado = {
        recado : novoRecado,
        prioridade : novaPrioridade,
    }

    await axios.put(`https://trabalhofinal-jadson-api.herokuapp.com/recados/${id}/alterar-recados/${idRecado}`, recadoAlterado)
    exibirRecados ()
}

exibirRecados ()