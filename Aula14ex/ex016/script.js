function contar(){
    // caixas que serão preenchidas 
    let inic = document.getElementById('txtInic')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    //  div para o resultado
    let resultado = document.getElementById('res')



    if (inic.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Faltam dados!")
    }else{
        resultado.innerHTML = "contando: "
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f){
            for(let cont = i; cont <= f; cont += p){
                resultado.innerHTML += `${cont} \u{1F449}`
            }
        }else{
            for(cont = i; cont >= f; cont -= p){
                resultado.innerHTML += `${cont} \u{1F449} `
            }
        }

        resultado.innerHTML += `\u{1F3C1}`
    }

    

}