// Variaveis
    var largura = 0
    var altura = 0
    var vidas = 1
    var tempo = 30
    var nivel = window.location.search
    var ponto = 0
    var totalPontos = ponto

 // Difficuldade
    nivel = nivel.replace('?', '')

    if(nivel == 'facil'){
        tempo = 30;
    }else if(nivel == 'medio'){
        tempo = 60;
    }else if(nivel == 'dificil'){
        tempo  = 120;
    }

// Pegar Tamanho da Tela
    function tela() {
        largura = window.innerWidth
        altura = window.innerHeight
    }
 tela()

// Calculando Tempo
    var cronometro = setInterval(function(){
        tempo -= 1
        if(tempo <= 0){
            clearInterval(cronometro)
            clearInterval(criaMosca)
            window.location.href = '../View/ganhouJogo.html'
        }else{
            document.getElementById('cronometro').innerHTML = tempo
        }
        
    }, 1000)

// Função de criação de mosquito
    function criarMosquito() {

// Remover Mosquito Anterior
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if(vidas > 3) {
            window.location.href = '../View/gameOver.html'
        }else {
            document.getElementById('v' + vidas).src="../IMG/coracao_vazio.png"
            vidas++
        }
    }

// Sistema de Pontos


// Gerando posição Aleatoria
    var posicaox = Math.floor(Math.random() * largura) - 100
    var posicaoy = Math.floor(Math.random() * altura) -100

    posicaox = posicaox < 0 ? 50 : posicaox
    posicaoy = posicaoy < 0 ? 50 : posicaoy

// Criando Tamanho aleatorio
    function tamanhoAleatorio() {
        var classe = Math.floor(Math.random() * 3)

        switch(classe){
            case 0:
                return 'mosquito1'

            case 1:
                return 'mosquito2'

            case 2:
                return 'mosquito3'
        }
    }

// Criando Lado aleatorio
    function ladoAleatorio() {
        var lado = Math.floor(Math.random() * 2)

        switch(lado){
            case 0:
                return 'ladoA'

            case 1:
                return 'ladoB'
        }

    }

// Criando elemento no html
    var mosquito = document.createElement('img')
    mosquito.src = '../IMG/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaox +'px'
    mosquito.style.top = posicaoy +'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosca'
    mosquito.onclick = function() {
        this.remove()
        ponto = ponto + 100
        document.getElementById('pontos').innerHTML = ponto
        totalPontos = ponto
    }

    document.body.appendChild(mosquito)
    tamanhoAleatorio()
    ladoAleatorio()
}


