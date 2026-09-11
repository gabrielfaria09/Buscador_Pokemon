const card_pokemon = document.getElementById("card_pokemon");
const pesquisa = document.getElementById("pesquisa");
const botao = document.getElementById("botao");
const imagemPokemon = document.getElementById("ImagemPokemon");
const paragrafoNome = document.getElementById("paragrafoNome");
const paragrafoId = document.getElementById("paragrafoId");
const paragrafoElemento = document.getElementById("paragrafoElemento");

async function buscar() {
    try {
        paragrafoNome.innerHTML = "";
        paragrafoId.innerHTML = "";
        imagemPokemon.setAttribute('src', "");

        const nome = pesquisa.value;
        const endereco = `https://pokeapi.co/api/v2/pokemon/${nome}`

        const requisicao = await fetch(endereco);

        if(!requisicao.ok){
            paragrafoNome.innerHTML = `O pokemón não existe, ou a conexão com a internet está fraca !`;
            throw new Error("Pokemón não existe ou falta conexão à internet");
        }

        const dados = await requisicao.json();

        const foto = dados.sprites.other['official-artwork'].front_default;
        const tipos = dados.types.map(slot => slot.type.name);

        paragrafoNome.innerHTML = `Nome: ${dados.name}`;
        paragrafoId.innerHTML = `Id: ${dados.id}`;
        paragrafoElemento.innerHTML = `Elemento: ${tipos}`
        imagemPokemon.setAttribute('src', foto);

    } catch (error) {
        console.error(error);
    }
}

botao.addEventListener('click', buscar);