function iniciarJogo(){
    var nivel =  document.getElementById('nivel').value
    if(nivel == ''){
        alert('Selecione um nível de jogo')
        return false
    }

    window.location.href = "View/jogo.html?" + nivel
   
}