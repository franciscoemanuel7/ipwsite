function Tabuada(){
    let num = parseInt(document.getElementById("num").value);
    let resul = document.getElementById('resul');
    let tab='';
  
    for(let i=0; i<=10 ; i++){
        tab += (`${num} x ${i} = ${num*i} <br/>`);
        resul.innerHTML = tab;
    }
}