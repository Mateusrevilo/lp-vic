// 1 - criar um array para armazenar a listas dos nomes
const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

let nomes = [];

function adicionarAmigo() {
    let valor = input.value;
    if (valor.trim() === '')
        return;

    valor = valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();   
    nomes.push(valor);
    

    const item = document.createElement('li')
    item.textContent = valor;
    lista.appendChild(item);
    input.value = ''
}

function sortearAmigo() {
    if(nomes.length === 0){
        resultado.innerHTML = '<li>Adicione nomes para Sortear!<li>';
        return;
    }
    let indice = Math.floor(Math.random()* nomes.length);
    let nomeSorteado = nomes[indice];
    
    resultado.innerHTML = `<li>O nome sorteado foi ${nomeSorteado}<li>`
}

function reiniciar() {
    location.reload()
}


botao.addEventListener('click', adicionarAmigo);
sortear.addEventListener('click', sortearAmigo);