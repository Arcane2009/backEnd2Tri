class Monstro{
    constructor(nome,hp){
        this.nome = nome;
        this.hp = Number(hp);
    }
    receberDano(dano){
        this.hp -= dano;
        if(this.hp <= 0){
            this.hp = 0;
            return `${this.nome} foi <strong>eliminado</strong>`
        }
        return `${this.nome} recebeu um ataque que deu <strong>${dano}</strong> de dano!`
    }
}

let monstroBatalha;
function iniciarJogo(){

    const nome = document.getElementById('nomeMonstro').value;
    const hp = document.getElementById('hpMonstro').value;

    monstroBatalha = new Monstro(nome,hp);

    function atualizaTela(){
        document.getElementById('statusNome').innerHTML = `<strong>${monstroBatalha.nome}</strong>`;
        document.getElementById('statusHp').innerHTML = `Vida atual: <strong>${monstroBatalha.hp}</strong>`;
    }
    document.getElementById('painel-criacao').style.display = "none";
    document.getElementById('painel-combate').style.display = "block";
    atualizaTela();
}
function aterNoMonstro(){
    
}