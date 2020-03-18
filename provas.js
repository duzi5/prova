var soma = 0

function somar (x){ 
    if (soma<21){
        soma = soma+x
            placar.innerHTML= soma
        }else {  
            placar.innerHTML= "Fim de jogo"
    }
    
}

var botao1 = document.getElementById ('somar1')  
botao1.onclick = function  (){
    somar(1)
}   
    
var botao2 = document.getElementById ('somar2')
botao2.onclick = function (){
    somar(2)
}

var botao3 = document.getElementById ('somar3')
botao3.onclick =  function (){
    somar(3)
}