
data = document.getElementById("data");
gasto = document.getElementById("gasto");
cat = document.getElementById("categoria");
formPag = document.getElementById("formaPag");
local = document.getElementById("local");

//criação tabela
let tab = document.createElement("table");
tab.id = "table";
const cab = ["Data","Gasto","Categoria","Forma de Pagamento","Local"];
let cab_row = document.createElement("tr");
tab.appendChild(cab_row);
cab.forEach(item=>{
    let col =document.createElement("th");
    col.innerHTML = item;
    cab_row.appendChild(col);
})

//evento clique botao enviar
let btnEnv = document.getElementById("button-env");
btnEnv.addEventListener("click",(event)=>{
    event.preventDefault();
    const li = [data,
                gasto,
                cat,
                formPag,
                local];
    
    // criação das linhas da tabela
    let row = document.createElement("tr");
    tab.appendChild(row);
    li.forEach(item=>{
        let col =document.createElement("td");
        col.innerHTML = item.value;
        row.appendChild(col);
    })
document.getElementsByClassName("form")[0].insertAdjacentElement("afterend",tab);
})

    
    
  
    