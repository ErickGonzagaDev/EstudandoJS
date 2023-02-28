function carregar() {
    var data = new Date()
    var hora = data.getHours()

    var msg = document.getElementById('msg') //objetos
    var img = document.getElementById('imagem') //objetos 

    msg.innerHTML = (`Agora são ${hora} horas.`)

    if (hora >= 0 && hora < 12) {
        //Dia
        img.src = '/aula12ex/imagens-c/background001.jpg'
        document.body.style.backgroundColor = 'yellow'

    } else if (hora >= 12 && hora < 18) {
        //Tarde
        img.src = '/aula12ex/imagens-c/background002.jpg'
        document.body.style.backgroundColor = 'orange'
    } else {
        //Noite
        img.src = '/aula12ex/imagens-c/background001.jpg'
        document.body.style.backgroundColor = 'brown'

    }

}

