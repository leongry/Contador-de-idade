function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERROR] Digite dados coerentes!`)
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            genero = "Homem"
            if(idade>=0 && idade < 10){
                //criança
                img.setAttribute("src", "Hbebe.jpg")
            } else if(idade < 21){
                //jovem
                img.setAttribute("src", "Hjovem.jpg")
            } else if(idade < 50){
                //adulto
                img.setAttribute("src", "Hadulto.jpg")
            } else {
                //idoso
                img.setAttribute("src", "Hidoso.jpg")
            }
        } else if(fsex[1].checked){
            genero = "Mulher"
            if(idade>=0 && idade < 10){
                //criança
                img.setAttribute("src", "Mbebe.jpg")
            } else if(idade < 21){
                //jovem
                img.setAttribute("src", "Mjovem.jpg")
            } else if(idade < 50){
                //adulto
                img.setAttribute("src", "Madulto.jpg")
            } else {
                //idoso
                img.setAttribute("src", "Midosa.jpg")
            }
        }
        res.style.textAlign= "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}