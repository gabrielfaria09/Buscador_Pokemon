const card_pokemon = document.getElementById("card_pokemon");
const pesquisa = document.getElementById("pesquisa");
const botao = document.getElementById("botao");

async function buscar() {
    try {
        const nome = pesquisa.value;
        const endereco = `https://pokeapi.co/api/v2/pokemon/${nome}`

        const requisicao = await fetch(endereco);
        await requisicao.json();

        console.log(requisicao);
        alert(requisicao);
    } catch (error) {
        
    }
}

botao.addEventListener('click', buscar);