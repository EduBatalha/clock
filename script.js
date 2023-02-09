function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12){
        //BOM DIA
        img.innerHTML = '<img src="fotomanha.png">'
        document.body.style.background = "#fccd8b"
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.innerHTML = '<img src="fototarde.png">'
        document.body.style.background = "#d86e16"
    } else {
        //BOA NOITE
        img.innerHTML = '<img src="fotonoite.png">'
        document.body.style.background = "#102c2f"
    }
}