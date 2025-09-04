// let titulo =  document.querySelector('h1');
// titulo.innerHTML = 'Jogo do pão';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Jogo só para os verdadeiros☺';

// TENTEI COLOCAR AUDIO DE RETORNO E NÃO DEU BOA
    //console.log(responsiveVoice.getVoices()); PARA PUXAR AS LISTAS DE LINGUAS
    // O JAVASCRIPT VAI FALAR COM O SEGUINTE CÓDIGO, ELE FALARÁ
    // COM BASE NAS LINGUAS DISPONÍVEIS EM RESPONSIVEVOICE
    // O rate serve como tempo de fala
    
// tentar pegar algo no github



let limite_numeros = 100;
let lista_numeros = [];

let tentativas = 0
let numero_aleatorio = gerar_numero();
exibir_texto_inicial()

function limpar_campo() {
    chute = document.querySelector('input');
    chute.value='';
}

function gerar_numero () {
    let numero_escolhido = parseInt(Math.random() * limite_numeros + 1);
    let quantidade_lista_numeros = lista_numeros.length;

    if (quantidade_lista_numeros == limite_numeros) {
        lista_numeros = [];
    }

    if (lista_numeros.includes(numero_escolhido)){
        return gerar_numero();
    } else {
        lista_numeros.push (numero_escolhido);
        return numero_escolhido;
    }
}

function exibir_texto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibir_texto_inicial() {
    //--------------------------------------------------------------------------------------------------
    // TENTEI ADICIONAR UMA VOZ PARA LER O CÓDIGO MAS NÃO DEU MUITO CERTO
    // DEIXO AQUI O CÓDIGO QUE UTILIZEI
    // let titulo = "Jogo do pão, você tem 5 vidas";
    // let paragrafo = "Jogo só para os verdadeiros☺";

    // // exibe no HTML
    // document.querySelector("h1").innerHTML = titulo;
    // document.querySelector("p").innerHTML = paragrafo;

    // // fala os dois de uma vez
    // responsiveVoice.speak(`${titulo}. ${paragrafo}`, "Brazilian Portuguese Female", {rate: 1.2});
    //--------------------------------------------------------------------------------------------------
    exibir_texto (`h1`,`Jogo do número secreto, você tem 5 vidas`);
    exibir_texto (`p`,`Números INT de 1 até ${limite_numeros}`);
}


function verificar_numero() {
    let chute = Number(document.querySelector('input').value);
    if (tentativas == 5) {
            alert("SUAS VIDAS ACABARU");
            alert(`SEU HORRÍVEL, o número era ${numero_aleatorio}`);
            limpar_campo();
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('cheat').removeAttribute('disabled');
            return;
    }
    if (chute == numero_aleatorio) {
        tentativas++
        let vidas = 5 - tentativas;
        let palavra_tentativas = vidas > 1 ? 'tentativas' : 'tentativa';
        if (tentativas == 1) {
        exibir_texto('h1',"OLOCO KKKJKK");
        exibir_texto('p',`DE PRIMEIRA??? CHEATER AQUI?`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('cheat').setAttribute('disabled','true');

        return;
    } else if (tentativas > 1) {
        exibir_texto('h1',"DALE KRAI");
        exibir_texto('p',`Você acertou depois de ${tentativas} ${palavra_tentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('cheat').setAttribute('disabled','true');
        return;
        }
    } else if (chute > numero_aleatorio) {
        tentativas++
        let vidas = 5 - tentativas;
        let palavra_tentativas = vidas > 1 ? 'vidas' : 'vida';
        exibir_texto('h1',`${chute} é maior que o número secreto`);
        exibir_texto('p',`- 1 vida, você ainda tem ${5 - tentativas} ${palavra_tentativas}`);
        limpar_campo();
    } else if (chute < numero_aleatorio) {
        tentativas++
        let vidas = 5 - tentativas;
        let palavra_tentativas = vidas > 1 ? 'vidas' : 'vida';
        exibir_texto('h1',`${chute} é menor que o número secreto`);
        exibir_texto('p',`- 1 vida, você ainda tem ${5 - tentativas} ${palavra_tentativas}`);
        limpar_campo();
    } else {
        exibir_texto('h1',`opa, acho que tivemos um problema`);
        exibir_texto('p',"ERROR");
    }
}

function reiniciar_jogo() {
    console.clear();
    numero_aleatorio = gerar_numero();
    limpar_campo();
    tentativas= 0;
    exibir_texto_inicial();
    document.getElementById('reiniciar').setAttribute('disabled','true');
    document.getElementById('cheat').removeAttribute('disabled');
}

function cheat() {
    console.log (`não fala para o adm mas o número é ${numero_aleatorio}`);
    alert(`VOCÊ NÃO TEM VERGONHA DE CLICAR NESSE BOTÃO ?
        aliás, é esse o número secreto ${numero_aleatorio}`)
}

