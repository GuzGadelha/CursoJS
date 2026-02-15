    let num = document.querySelector('input#txtNum');
    let lista = document.querySelector('select#selTab');
    let res = document.querySelector('div#res');
    let array = [];

    function isNumber(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true;
        }else{
            return false;
        }
    }
    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true; 
        }else{
            return false;
        }
    }

    function adicionar(){
        if (isNumber(num.value) && !inLista(num.value, array)) {

            array.push(Number(num.value));
            let item = document.createElement('option');
            item.text = `Número ${num.value} adicionado`;
            lista.appendChild(item);
            
            
        }else{
            window.alert("Valor inválido ou já inserido na lista!")
        }
    }

    function finalizar(){
        /*
        - quant total de elemetnos
        - maior elemetno
        - menor elemento
        - somatorio
        - media
        */
    }