
// const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');

// listaSelecaoPokedevs.forEach(pokedev => {
//     pokedev.addEventListener("click", () => {
//         const cartaoPokedevAberto = document.querySelector(".aberto");
//         cartaoPokedevAberto.classList.remove("aberto");

//         const idPokedevSelecionado = pokedev.attributes.id.value;

//         const  idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
        
//         const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir)

//         cartaoPokedevParaAbrir.classList.add("aberto");

//         const pokedevAtivoNaListagem = document.querySelector(".ativo");
//         pokedevAtivoNaListagem.classList.remove("ativo");


//         const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
//         pokedevSelecionadoNaListagem.classList.add("ativo");

//     })
// })


// PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");


//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev => {
	pokedev.addEventListener("click", () => {
		esconderCartaoPokedev();

        //  PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 
		const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

		desativarPokedevNaListagem();
		ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

	})
})

//CODIGO PARA O POKEDEV ATIVO TER APENAS UMA COR E NÃO VÁRIAS
// //  PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
// function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
// 	const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
// 	pokedevSelecionadoNaListagem.classList.add("ativo");
// }

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    // Remove a classe 'ativo' de todos os Pokedevs
    const pokedevs = document.querySelectorAll('.listagem .pokedev');
    pokedevs.forEach(pokedev => pokedev.classList.remove('ativo'));

    // Adiciona a classe 'ativo' ao Pokedev selecionado
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

//PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
function desativarPokedevNaListagem() {
	const pokedevAtivoNaListagem = document.querySelector(".ativo");
	pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
	const idPokedevSelecionado = pokedev.attributes.id.value;
	const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
	const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
	cartaoPokedevParaAbrir.classList.add("aberto");
	return idPokedevSelecionado;
}

//PASSO 3 - remover a classe aberto só do cartão que tá aberto
function esconderCartaoPokedev() {
	const cartaoPokedevAberto = document.querySelector(".aberto");
	cartaoPokedevAberto.classList.remove("aberto");
}






