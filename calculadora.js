function Soma() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    document.getElementById('resul').innerHTML = (`${n1} + ${n2} = ${n1+n2}`)
}
function Sub() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    document.getElementById('resul').innerHTML = (`${n1} - ${n2} = ${n1-n2}`)
}
function Mult() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    document.getElementById('resul').innerHTML = (`${n1} * ${n2} = ${n1*n2}`)
}
function Div() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    document.getElementById('resul').innerHTML = (`${n1} / ${n2} = ${(n1/n2).toFixed(2)}`)
}