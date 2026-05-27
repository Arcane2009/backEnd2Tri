/*
Desafio 
Enunciado: 
"Foi adicionado um novo campo de input do tipo number no HTML chamado 'Nível do Herói'. 
Modifique a classe Heroi para que o construtor também receba e armazene esse nível.
 No JavaScript da função, capture esse novo input e garanta que o nível seja exibido 
 no painel de resultado acessando a propriedade do objeto."
*/ 
class heroi{
    constructor(nome,classe){
        this.nome = nome;
        this.classe = classe;
    }
}
function criarHeroi(){
//Capturndo o que o usuário digitou/selecionou na tela
    const nomeDigitado = document.getElementById('nomeInput').value;
    const classeSelecionada = document.getElementById('classeSelect').value;
    //Criando o objeto dinamicamente com os valores dos campos
    const novoHeroi = new heroi(nomeDigitado,classeSelecionada);
}