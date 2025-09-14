var hora = new Date().getHours()    // Pega a hora atual do sistema

console.log(`Agora são exatamente ${(hora)} horas.`)    // Mostra a hora atual

if (hora < 12){ // Condição composta
    console.log('Bom dia!')

}else if (hora <= 18){
    console.log('Boa tarde!')

}else{
    console.log('Boa noite!')

}