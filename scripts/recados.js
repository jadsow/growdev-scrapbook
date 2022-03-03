const valorPrioridade = document.querySelector('#prioridade-recado');
const descricaoRecado = document.querySelector('#descricao-recado');
const detalhamentoRecado = document.querySelector('#detalhamento-recado');
let conteudoRecados = JSON.parse(localStorage.getItem('conteudo')) || [];

function adicionarRecado () {

    let conteudo = {
        prioridade : valorPrioridade.value,
        descricao : descricaoRecado.value,
        detalhamento : detalhamentoRecado.value
    }

    conteudoRecados.push(conteudo);

    salvarRecado()
    exibirRecado()
}

function salvarRecado() {
    localStorage.setItem('conteudo', JSON.stringify(conteudoRecados))
}

function exibirRecado () {
    let mostrarConteudo = document.querySelector('#linhas-tabela');
    mostrarConteudo.innerHTML = '';

    for (conteudo of conteudoRecados) {
        const posicao = conteudoRecados.indexOf(conteudo)
        mostrarConteudo.innerHTML += `
        <table class="conteudoFinal">
            <tr>
            <td>${conteudo.prioridade}</td>
            <td>${conteudo.descricao}</td>
            <td>${conteudo.detalhamento}</td>
            <td>
            <div> <input type="button" id="apagar" placeholder="apagar" value="Apagar" onclick="removerRecado(${posicao})"></div>
            <div> <input type="button" id="editar" placeholder="editar" value="Editar" onclick="editarRecado(${posicao})"></div>
            </td>
            </tr>
            </table>`;
    }
}

function editarRecado (posicao) {
    const prioridade = prompt('Digite sua nova prioridade');
    const descricao = prompt('Digita sua nova descrição');
    const detalhamento = prompt('Digite o novo detalhamento');

    const novaPrioridade = conteudoRecados[posicao].prioridade = prioridade;
    const novaDescricao = conteudoRecados[posicao].descricao = descricao;
    const novoDetalhamento = conteudoRecados[posicao].detalhamento = detalhamento;

    let conteudo = {
        prioridade : novaPrioridade,
        descricao : novaDescricao,
        detalhamento : novoDetalhamento
    }

    conteudoRecados.push(conteudo);
    conteudoRecados.splice(conteudoRecados.length -1,1);

    exibirRecado();
    salvarRecado();
} 

function removerRecado (posicao) {
    conteudoRecados.splice(posicao, 1);
    exibirRecado();
    salvarRecado();
}