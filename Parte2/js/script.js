//alert("Olá mundo"); // mensagem de alerta
//var resposta = confirm("Deseja excluir?"); // variável nome = método()
//console.log(resposta); // para visualizar resposta
const a = 10; // 3 formas de declarar variável: var, const (não muda), let (para escopo)
const b = 33;

function somar(a, b){
	return parseInt(a) + parseInt(b);
}

//console.log(somar(2, 5));

document.querySelector("#calcular").addEventListener("click", function(){
	let valorA = document.querySelector("#valorA").value // #id
	let valorB = document.querySelector("#valorB").value

	if (valorA.length > 0 && valorB.length > 0) {
		//alert(parseInt(valorA) + parseInt(valorB));
		alert(somar(valorA, valorB));
	}
	else{
		alert("Digite os valores!");
	}

});