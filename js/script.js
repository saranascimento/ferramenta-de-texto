// binario 
const inputBinario = document.getElementById('inputBinario')
const textModifiedBinary = document.getElementById('textModifiedBinary')

// contador
const inputContador = document.getElementById('inputContador')
const caracteres = document.getElementById('caracteres');
const caracterSemEspaco = document.getElementById('caracter-sem-espaco');
const palavras = document.getElementById('palavras');
const espacos = document.getElementById('espacos');
const linhas = document.getElementById('linhas');
const vogais = document.getElementById('vogais');
const consoantes = document.getElementById('consoantes');
const numeros = document.getElementById('numeros');
const caracterEspecial = document.getElementById('caracter-especial')
const minusculos = document.getElementById('minusculos')
const maiusculos = document.getElementById('maiusculos')
const letras = document.getElementById('letras')

// conversor
const inputConversor = document.getElementById('inputConversor')
const textModifiedConversor = document.getElementById('textModifiedConversor')
const buttons = document.querySelectorAll('.converte button')
const abas = document.querySelectorAll("ul#abas a");
const contentAbas = document.querySelectorAll("div.contentAba");


// abas

if(abas.length && contentAbas.length) {
    contentAbas[0].classList.add('ativo');
    

    function activeTab(index) {
        contentAbas.forEach((content) => {
        content.classList.remove('ativo');
    });

    const direcao = contentAbas[index].dataset.anime;
    contentAbas[index].classList.add('ativo', direcao);
    }

    abas.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        
        activeTab(index);
    });
    });
}

function abaLinkActive(classe) {
    
    abas.forEach(aba => {
        aba.addEventListener('click', function() {
            
            var activeMenuAba = document.getElementsByClassName(classe);

            if (activeMenuAba.length > 0) {
                activeMenuAba[0].className = activeMenuAba[0].className.replace(classe, "");
            }
            
                this.className += classe;
            
        })
    });

}

abaLinkActive('selected')



// binario
inputBinario.addEventListener("keyup", event => {
     textModifiedBinary.value = binarioParaDecimal(event.target.value.split(/\s+/).filter(value => value !== '').join(''), event)
    
})

function binarioParaDecimal(valor, event) {

    let base = 2;
    let decimal = 0;
    let potencia = valor.length-1;

    if (textModifiedBinary.value === '') decimal = '';

    const ehBinario = numero => {
        return Number(numero) === 0 || Number(numero) === 1; 
    }

    
    
    const converteParaDecimal = (soma, numeroAtual, index) => {
        return soma + (numeroAtual * (base ** (potencia - index)));
    }

    let numeros = valor.split("");


    const somenteBinario = numeros.every(ehBinario);
    console.log(event)
    

    if(somenteBinario === false  && event.key !== "Backspace"){
        alert('Os números só podem ser 0 ou 1');
        return ":("

    } 

    if( somenteBinario === false ) return ":("
    
    decimal = numeros.reduce(converteParaDecimal, 0)

    return decimal

}

// conversor
function btnActive(classe) {
    for (var index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener("click", function() {

        var current = document.getElementsByClassName(classe);
    
        if (current.length > 0) {
            current[0].className = current[0].className.replace(classe, "");
        }
    
        this.className += classe;
        });
    }
}


btnActive("activeColorful")






for(let button of buttons) {
    button.addEventListener('click', () => {
        if(button.className.includes("converte__maiusculo")) converteParaMaiusculo(inputConversor)
        if(button.className.includes("converte__minusculo")) converteParaMinusculo(inputConversor)
        if(button.className.includes("converte__limpar")) limparAreaDeTexto(inputConversor)
        if(button.className.includes("converte__reverso")) converteParaReverse(inputConversor)
        if(button.className.includes("converte__invertido")) converteParaInvertido(inputConversor)
        if(button.className.includes("converte__sublinhado")) converteParaSublinhado(inputConversor)
        if(button.className.includes("converte_negrito")) converteParaNegrito(inputConversor)
        if(button.className.includes("converte_titulo")) converteParaTitulo(inputConversor)
        
    })
}


function converteParaMaiusculo(inputConversor) {
textModifiedConversor.value = inputConversor.value.toLocaleUpperCase();
}

function converteParaMinusculo(inputConversor) {
    textModifiedConversor.value = inputConversor.value.toLocaleLowerCase();
}

function converteParaReverse(inputConversor) {
    textModifiedConversor.value = inputConversor.value.split('').reverse().join('');
}

function converteParaNegrito(inputConversor) {
    textModifiedConversor.value = inputConversor.value
    textModifiedConversor.classList.toggle("negrito");
}

function converteParaSublinhado(inputConversor) {
    textModifiedConversor.value = inputConversor.value;
    if(textModifiedConversor.value !== '') textModifiedConversor.classList.toggle("sublinhado");
    
}

function limparAreaDeTexto(inputConversor) {
    textModifiedConversor.value = '';
    inputConversor.value = '';
    textModifiedConversor.classList.remove("sublinhado")
}

function converteParaTitulo(inputConversor) {
    textModifiedConversor.value = inputConversor.value;
    textModifiedConversor.classList.toggle("titulo");
}

function converteParaInvertido(inputConversor) {

    let stringTemporaria = '';

    inputConversor.value.split('').map(letra => {
        stringTemporaria += inverteString(letra);
        
    })

    textModifiedConversor.value = stringTemporaria;
}

function inverteString(letra) {
const caracteresInverted = {
        'a' : '\u0250',
        'b' : 'q',
        'c' : '\u0254',
        'd' : 'p',
        'e' : '\u01DD',
        'f' : '\u025F',
        'g' : '\u0183',
        'h' : '\u0265',
        'i' : '\u0131', //'\u0131\u0323' 
        'j' : '\u027E', //original: \u0638
        'k' : '\u029E',
        'l' : '\u05DF',
        'm' : '\u026F',
        'n' : 'u',
        'o' : 'o',
        'p' : 'd',
        'q' : 'b',
        'r' : '\u0279',
        's' : 's',
        't' : '\u0287',
        'u' : 'n',
        'v' : '\u028C',
        'w' : '\u028D',
        'x' : 'x',
        'y' : '\u028E',
        'z' : 'z',
        'A' : '∀',
        'B' : 'B',
        'C' : 'Ɔ',
        'D' : 'ᗡ',
        'E' : 'Ǝ',
        'F' : 'Ⅎ',
        'G' : 'פ',
        'H' : 'H',
        'I' : 'I',
        'J' : 'ſ',
        'K' : 'K',
        'L' : '˥',
        'M' : 'W',
        'N' : 'N',
        'O' : 'O',
        'P' : 'Ԁ',
        'Q' : 'Q',
        'R' : '\u0281',
        'S' : 'S',
        'T' : '┴',
        'U' : '∩',
        'V' : 'Λ',
        'W' : 'M',
        'X' : 'X',
        'Y' : '⅄',
        'Z' : 'Z',
        '[' : ']',
        ']' : '[',
        '(' : ')',
        ')' : '(',
        '{' : '}',
        '}' : '{',
        '?' : '\u00BF',
        '!' : '\u00A1',
        '\'' : ',',
        ',' : '\'',
        '.' : '\u02D9',
        '_' : '\u203E',
        ':' : '\u061B',
        '1' : 'Ɩ',
        '2' : 'ᄅ',
        '3' : '\u025B',
        '4' : 'ㄣ',
        '5' : 'ϛ',
        '6' : '9',
        '7' : 'ㄥ',
        '8' : '8',
        '9' : '6',
        ' ' : ' ',
    }


    return caracteresInverted[letra] || letra
    
}



// contador
inputContador.addEventListener('input', () => {
        
    totalDeCaracteres(inputContador)
    caracteresSemEspaco(inputContador)
    totalDePalavras(inputContador) 
    totalDeEspacos(inputContador)
    totalDeLinhas(inputContador)
    totalDeVogais(inputContador)
    totalDeConsoantes(inputContador)
    totalDeNumeros(inputContador)
    totalDeEspeciais(inputContador)
    totalDeMinusculos(inputContador)
    totalDeMaiusculos(inputContador)
    totalDeLetras(inputContador)

})


function totalDeCaracteres(inputContador) {
    return caracteres.innerHTML = inputContador.value.length;
}


function caracteresSemEspaco(inputContador ) {
    return caracterSemEspaco.innerHTML = inputContador.value.split(/\s+/).filter(value => value !== '').join('').length;

}

function totalDePalavras(inputContador) {

return palavras.innerHTML = inputContador.value.split(/\s+/).filter(palavra => palavra !== '').length;
}

function totalDeEspacos(inputContador) {
    return espacos.innerHTML = inputContador.value.split('').filter(espaco => espaco === ' ').length ;
}

function totalDeLinhas(inputContador) {
    return linhas.innerHTML = inputContador.value.split(/\n/).filter(linha => linha !== '').length; 
}


function totalDeVogais(inputContador) {
    return vogais.innerHTML = inputContador.value.toLowerCase().split(/[^aeiou]/).join('').length;

}

function totalDeConsoantes(inputContador) {
    return consoantes.innerHTML = inputContador.value.toLowerCase().split('').filter(consoante => "bcdfghjklmnpqrstvwxyz".includes(consoante)).length;
}

function totalDeNumeros(inputContador) {
    return numeros.innerHTML =  inputContador.value.split(/[^0-9]/).join('').length;
}


function totalDeEspeciais(inputContador) {
    return caracterEspecial.innerHTML = inputContador.value.split(/[a-zA-Z0-9 \n]*/).join('').length;
}

function totalDeMinusculos(inputContador) {
    return minusculos.innerHTML = inputContador.value.split(/[^a-z]/).join('').length;
}

function totalDeMaiusculos(inputContador) {
    return maiusculos.innerHTML = inputContador.value.split(/[^A-Z]/).join('').length;
}

function totalDeLetras(inputContador) {
    return letras.innerHTML = inputContador.value.split(/[^a-zA-Z]/).join('').length;
}