function Ramdom (){
    let vet = [];
    let num = document.getElementById("num").value;
    let isNum = false;
    for(let i=1; i<=6; i++){
        vet[i] = Math.floor(Math.random() * 20);
        if(num == vet[i]){
            isNum = true;
        }
    }
    if(isNum==true){
        document.getElementById("resul").innerHTML = (`<p style="color: blue;"><b>Você acertou!</b></p><p>Número digitado: ${num}</p><p>Números sorteados: ${vet}</p>`);
    }
    else{
        document.getElementById("resul").innerHTML = (`<p style="color: red;"><b>Você errou!</b></p><p>Número digitado: ${num}</p><p>Números sorteados: ${vet}</p>`);
    }
}