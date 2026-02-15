function obter() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let num4 = Number(document.getElementById("num4").value);
    let num5 = Number(document.getElementById("num5").value);
    let num6 = Number(document.getElementById("num6").value);

    let array = [num1, num2, num3, num4, num5, num6];

    let res = document.getElementById("dados");
    res.innerHTML = "<p>\u2022Array escrito pelo usuario:<br> [" + array + "]</p>";
    array.sort((a, b) => a - b);
    res.innerHTML += "<p>\u2022Array ordenado usando \"array.sort()\":<br> [" + array + "]</p>";
    res.innerHTML += "<p>\u2022Terceiro elemento usando \"array[2]\":<br> "+ array[2] + "</p>";
    res.innerHTML += "<p>\u2022Tamanho do Array usando \"array.length\":<br> " + array.length + "</p>";
    array.push(7);
    array.sort((a, b) => a - b);
    res.innerHTML += "<p>\u2022Adicionando o elemento 7 usando \"array.push(7)\":<br> [" + array + "]</p>";
    array.pop();
    res.innerHTML += "<p>Achando a posição do 7(se ele ainda estiver no vetor) usando \"array.indexOf(7)\":<br> " + array.indexOf(7) + "</p>"
    res.innerHTML += "<p>Retirando o ultimo elemento com \"array.pop()\":<br> [" + array + "]</p>"
}