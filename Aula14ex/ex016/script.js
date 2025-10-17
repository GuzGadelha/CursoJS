function contar(){
    let divResultado = document.getElementById("res")
    let numInic = document.getElementById("txtInic")
    let numFim = document.getElementById("txtFim")
    let numPasso = document.getElementById("txtPasso")



    if (numInic.Value.length == 0 || numFim.Value.length == 0 || numPasso.Value.length == 0){
        window.alert("[ERRO] Faltam dados!")
    }else{
        divResultado.innerHTML = "contando: "
        let i = Number(numInic.value)
        let f = Number(numFim.value)
        let p = NUmber(numPasso.value)

        for(let x = i; x < f; x += p){
            divResultado.innerHTML += `${x}`
        }
    }
}