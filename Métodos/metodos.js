class Monstro{
    constructor(nome, hp){
    this.nome = nome;
    this.hp = Number(hp);
    }
    
receberDano(quantidade){
    this.hp -= quantidade;
    if (this.hp <= 0){
    this.hp = 0;
    return `${this.nome} foi derrotado! 💀`;
    }
    return `${this.nome} sofreu ${quantidade} de dano!`;
    }
    }

function atualizarTela() {
    document.getElementById('statusNome').innerText = monstroDaBatalha.nome;
    document.getElementById('statusHp').innerText = `Vida Atual: ${monstroDaBatalha.hp} ❤️`;
}

let monstroDaBatalha;
    
function iniciarJogo() {
const nome = document.getElementById('nomeMonstro').value;
const hp = document.getElementById('hpMonstro').value;
    
monstroDaBatalha = new Monstro(nome, hp);
    
    
document.getElementById('painel-criacao').style.display = "none";
document.getElementById('painel-combate').style.display = "block";
atualizarTela();
}
    
    
    
function baterNoMonstro() {
    
const valorDano = Number(document.getElementById('danoInput').value);
    
    
const msg = monstroDaBatalha.receberDano(valorDano);
    
document.getElementById('log').innerText = msg;
atualizarTela();
}