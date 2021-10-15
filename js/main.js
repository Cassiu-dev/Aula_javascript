function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
};

function redirecionar(){
    window.open("https://www.linkedin.com/feed/");
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML ="Texto novo para aprender essa porra"
    elemento.innerHTML ="Texto novo para aprender essa porra"
};

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui"
    elemento.innerHTML ="Passe o mouse aqui"
}

function load(){
    alert("pagina carregada");
}

function mudando(elemento){
    alert(elemento.value);
}







/*
var frutas = [{nome:"maça", cor:"vermelho"},{nome:"uva", cor:"verde"} ];
console.log(frutas);
alert(frutas[1].cor);






var nome = "Cássio P.O.Rizzo";
var idade = 32
var idade2 = 10
var frase = "Japão e o melhor time do mundo";


//alert( nome + " tem idade " + idade + "anos");
//alert (idade + idade2);

console.log(idade +idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
alert(frase.toUpperCase());


var lista = ["maça", "pera", "laranja"];

console.log(lista[1]);
alert(lista[2]);
lista.push("uva");
console.log(lista);
lista.pop(lista[1]);
console.log(lista);

console.log(lista.length);
console.log(lista.reverse());
//console.log(lista.toString());
console.log(lista.join("-"));


var fruta ={nome:"maça", cor:"vermelha"};
console.log(fruta);

var idade;
idade = prompt("qual sua idade");

if (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
};


var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count ++;
}



var count = 0;

for(count =0 ; count <= 5 ; count++ ){
    console.log(count);
};

var d =new Date();
console.log(d);


function soma (n1 , n2){
    return n1+ n2;
}

alert(soma(5,10));

function replace1 (frase, nome, novonome){
    return frase.replace (nome , novonome)
}

alert (replace1("vai japão","japão", "brasil"));



function validaidade (idade){
    var validar;
    if(idade>=18){
        validar = true
    }else {
        validar = false;
    }
    return validar;
}
    var idade = prompt("qual sua idade")  ;

    

    console.log(validaidade(idade));

    if(validar = true){
        console.log("maior de idade")
    }else{
        console.log("menor de idade")
    };
    

*/


