function Contar(){
    let contador = "";
    for(let i = 2; i<=10; i = i+2){
        contador += i + " ";
    }
    document.getElementById("contador").innerHTML = contador
}