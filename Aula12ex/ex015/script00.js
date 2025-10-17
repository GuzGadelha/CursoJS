// O alert pode ficar aqui se você quiser que ele apareça sempre que a página carrega.
alert('Olá! Seja bem-vindo(a) ao meu site!');

function verificar() {
    //  IDADE
    //  Criar o objeto Date para pegar o ano atual
    var data = new Date();
    var anoAtual = data.getFullYear();
    // Selecionar o INPUT usando seu ID (#txtano)
    var inputAno = document.querySelector('input#txtano');
    var anoInserido = Number(inputAno.value);
    var idade = anoAtual - anoInserido;

    // SEXO
    var sexoMasculino = document.getElementById('masc');
    var sexoFeminino = document.getElementById('fem');

    // RESULTADO
    // Selecionar a DIV de resultado usando seu ID (#resultado)
    var res = document.querySelector('div#resultado');

    // Validação para evitar resultados estranhos
    if (anoInserido == 0 || anoInserido > anoAtual) { window.alert('[ERRO] Verifique os dados e tente novamente!');} 
    
    
    if (sexoMasculino.checked) {
        // Se o sexo masculino estiver selecionado
        if (idade >= 0 && idade <= 14) {
            // Criança
            res.innerHTML = `Detectamos um menino com ${idade} anos.`;
            var menino 
            res.innerHTML += '<br><img src=".../img/menino.jpg" alt="Menino">';
        }else if (idade > 18 && idade < 60) {
             // Adulto
            res.innerHTML = `Detectamos um homem com ${idade} anos.`;
        }else{
            // Adulto
            res.innerHTML = `Detectamos um velho com ${idade} anos.`;
        }
    }else if (sexoFeminino.checked){   
        if (idade >= 0 && idade <= 14) { 
            // Criança
            res.innerHTML = `Detectamos uma menina com ${idade} anos.`;
        }else if (idade > 18 && idade < 60) {
             // Jovem
            res.innerHTML = `Detectamos uma mulher com ${idade} anos.`;
        }else {
            // Adulto
            res.innerHTML = `Detectamos uma velha com ${idade} anos.`;
        }
    }    
}
