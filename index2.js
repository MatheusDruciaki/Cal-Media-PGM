function somar() {
    var media = document.getElementByld('media')
    var br1 = document.getElementByld('barra 1')
    var br2 = document.getElementByld('barra 2')
    var br3 = document.getElementByld('barra 3')
    var br1 = Number (br1.value)
    var br2 = Number (br2.value)
    var br3 = Number (br3.value)
    var valor = (br1 * 2+br2 * 3+br3 * 5) /10
    document.getElementsByName.byld('media').innerHTML=valor
    var resultado = (valor>=60 ?'voce atingiu a media!' : 'voce nao atingiu a media!')
    document.getElementByld('aprovado-reprovado').innerHTML=resultado
    if (valor>=60){
        document.getElementByld('media').style.color='green'
        document.getElementById('aprovado-reprovado').style.color='green'}
        else {
            document.getElementById('media').style.color='red'
            document.getElementById('aprovado-reprovado').style.color='red'}
}