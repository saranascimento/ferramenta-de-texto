// binario 
const inputBinario = document.getElementById('inputBinario')
const textModifiedBinary = document.getElementById('textModifiedBinary')
console.log(inputBinario)
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

// guardar hash da url
window.addEventListener('load', () => {
    abas.forEach((a) => {
        a.addEventListener('click', () => {
            let selected = a.parentNode.querySelector('a.selected')
            if(selected) selected.classList.remove('selected')
            a.classList.add('selected')
            console.log(a)
        })
    })
    if(location.hash) {
        document.querySelector('a[href="'+location.hash+'"]').classList.add('selected')
    }
})

// binario
inputBinario.addEventListener("keyup", event => {
    textModifiedBinary.value = binarioParaDecimal(event.target.value)
})

function binarioParaDecimal(valor) {

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
    console.log(numeros)

    const somenteBinario = numeros.every(ehBinario);

    if(somenteBinario === false){
        alert('Os números só podem ser 0 ou 1');
        return ":("
    } 

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

function abaLinkActive(classe) {
    
    abas.forEach(aba => {
        aba.addEventListener('click', function() {
            
            var activeMenuAba = document.getElementsByClassName(classe);

            if (activeMenuAba.length > 0) {
                activeMenuAba[0].className = activeMenuAba[0].className.replace(classe, "");
            }
            
                this.className += classe;
            
                for (let contentAba of contentAbas) {
                    console.log(contentAba)
                }
            
        })
    });

}

abaLinkActive('selected')




for(let button of buttons) {
    button.addEventListener('click', () => {
        if(button.className.includes("converte__maiusculo")) converteParaMaiusculo(inputConversor)
        if(button.className.includes("converte__minusculo")) converteParaMinusculo(inputConversor)
        if(button.className.includes("converte__limpar")) limparAreaDeTexto(inputConversor)
        if(button.className.includes("converte__reverso")) converteParaReverse(inputConversor)
        if(button.className.includes("converte__invertido")) converteParaInvertido(inputConversor)
        if(button.className.includes("converte__sublinhado")) converteParaSublinhado(inputConversor)
        if(button.className.includes("converte_negrito")) converteParaNegrito(inputConversor)
        
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

function converteParaInvertido(inputConversor) {

    let stringTemporaria = '';

    inputConversor.value.split('').map(letra => {
        if(letra === 'undefined') return ''
        stringTemporaria += inverteString(letra);
        
    })

    textModifiedConversor.value = stringTemporaria;
}

function converteParaNegrito(inputConversor) {
    textModifiedConversor.classList.toggle("negrito");
    textModifiedConversor.value = inputConversor.value
    
}

function converteParaSublinhado(inputConversor) {
    
    textModifiedConversor.value = inputConversor.value;
    textModifiedConversor.classList.toggle("sublinhado");
}

function limparAreaDeTexto(inputConversor) {
    textModifiedConversor.value = '';
    inputConversor.value = '';
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
        'R' : 'R',
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
        '9' : '6',
        '6' : '9',
        ' ' : ' ',
    }


    return caracteresInverted[letra]
    
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
    return espacos.innerHTML = inputContador.value.split('').filter(value => value === ' ').length ;
}

function totalDeLinhas(inputContador) {
    return linhas.innerHTML = inputContador.value.split(/\n/).filter(palavra => palavra !== '').length; 
}


function totalDeVogais(inputContador) {
    return vogais.innerHTML = inputContador.value.toLowerCase().split(/[^aeiou]/).join('').length;

}

function totalDeConsoantes(inputContador) {
    return consoantes.innerHTML = inputContador.value.toLowerCase().split('').filter(value => "bcdfghjklmnpqrstvwxyz".includes(value)).length;
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
    console.log(inputContador.value.split(/[^a-zA-Z]/).join(''))
    return letras.innerHTML = inputContador.value.split(/[^a-zA-Z]/).join('').length;
}