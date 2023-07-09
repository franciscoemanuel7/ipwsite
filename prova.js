function Calculo(){
    let km = document.getElementById("km").value;
    let consumo = document.getElementById("consumo").value;
    let preço = document.getElementById("preço").value;
    let calculos = km/consumo*preço
    document.getElementById("div2").innerHTML = 
    (`<h2>Meu cálculo</h2>
    <table width="100%">
        <tr>
            <td width="50%" class="calc">
                <span>Distância percorrida = &nbsp;</span>
                <span><b>${km}<b></span>
            </td>
            <td width="50%" class="calc">
                <span>Consumo do veículo  = &nbsp;</span>
                <span><b>${consumo}l<b></span>
            </td>
        </tr>
    </table>
    <hr color="black">
     <h2>Resultado</h2>
     <table width="100%" id="table1">
         <tr id="linha1">
             <td width="33.3%" class="linha1">
                 <b>Km</b>
             </td>
             <td width="33.3%" class="linha1">
                 <b>Consumo(l)</b>
             </td>
             <td width="33.3%" class="linha1">
                 <b>Preço</b>
             </td>
         </tr>
         <tr>
             <td id="linha2">
                ${km}
             </td>
             <td id="linha2">
                ${consumo}
             </td>
             <td id="linha2">
                R$${calculos.toFixed(2)}
             </td>
         </tr>
     </table>`)
}
