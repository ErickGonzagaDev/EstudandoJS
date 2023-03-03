function verificar(){
    var data = new Date() 

    var anoAtual = Number(data.getFullYear())
    var anoNas = (document.getElementById('iano')).value
    var idade = Number( anoAtual - anoNas)
    var res = document.getElementById('res')


    var sexo = document.getElementsByName('sexo')
    var genero = ''

    if(sexo[0].checked){
        genero ='masculino'
    }else{
        genero = 'feminino'
    }


    res.innerHTML = (`Você tem ${idade} anos e é do sexo ${genero}`)
}