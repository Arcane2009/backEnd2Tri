function lutar(){
    const classe = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');

if(!arma){
    log.innerHTML = "⚔️Escolha uma arma⚔️";
    return;
}

    const dado = Math.floor(Math.random() * 20) + 1;
    let resultado = `🎲 Dado: ${dado} | <strong>${classe}</strong> com <strong>${arma}</strong>`;

    switch(classe){
        case "guerreiro":
        if(arma.toLowerCase()==="espada" && dado>5){
            resultado += "<span class='sucesso'> VITÓRIA: Você corta o oponente ao meio com um só golpe de sua espada </span>"
            log.innerHTML = resultado
        
        }else if(dado >15){
            resultado += "<span class='sucesso'> VITÓRIA: Mesmo sem sua fiel lâmina você esmaga o oponente</span>"
            log.innerHTML = resultado
        
        }else{
            resultado += "<span class='derrota'> DERROTA: O oponente foi mais rápido, "+arma+" foi inútil</span>"
            log.innerHTML = resultado
        }
        break;
        
        case "mago":
        if(arma.toLowerCase()==="cajado" && dado>5){
            resultado += "<span class='sucesso'> VITÓRIA: Você vaporiza o oponente com um só raio de seu cajado </span>"
            log.innerHTML = resultado
        
        }else if(dado >15){
            resultado += "<span class='sucesso'> VITÓRIA: Mesmo sem seu fiel cajado você esmaga o oponente</span>"
            log.innerHTML = resultado
        
        }else{
            resultado += "<span class='derrota'> DERROTA: O oponente foi mais rápido, "+arma+" foi inútil</span>"
            log.innerHTML = resultado
        }
        break;

        case "arqueiro":
        if(arma.toLowerCase()==="arco" && dado>5){
            resultado += "<span class='sucesso'> VITÓRIA: Você acerta em cheio a cabeça do seu oponente com uma só flecha </span>"
            log.innerHTML = resultado
        
        }else if(dado >15){
            resultado += "<span class='sucesso'> VITÓRIA: Mesmo sem seu fiel arco você esmaga o oponente</span>"
            log.innerHTML = resultado
        
        }else{
            resultado += "<span class='derrota'> DERROTA: O oponente foi mais rápido, "+arma+" foi inútil</span>"
            log.innerHTML = resultado
        }
        break;
}
}
