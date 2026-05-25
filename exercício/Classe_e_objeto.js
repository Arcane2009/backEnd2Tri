/*
Desafio 
Enunciado: 
"Foi adicionado um novo campo de input do tipo number no HTML chamado 'Nível do Herói'. 
Modifique a classe Heroi para que o construtor também receba e armazene esse nível.
 No JavaScript da função, capture esse novo input e garanta que o nível seja exibido 
 no painel de resultado acessando a propriedade do objeto."
*/ 
function criarHeroi() {
    const nome = document.getElementById('nomeInput').value;
    const classe = document.getElementById('classeSelect').value;
    const nivel = document.getElementById('nivelInput').value;
    const log = document.getElementById('resultado');

    console.log(nome,classe,nivel)

    if(!nome){
        alert("Escolha um nome");
        return;
    }
    if(!nivel){
        alert("Escolha um nível");
        return;
    }
    if(nivel < 0){
        alert("Seu nível não pode ser negativo");
    }
}
