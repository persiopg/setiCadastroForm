let display = +document.getElementById("display").value;
let btnSoma = document.getElementById("mais");
let btnSub = document.getElementById("menos");
let checkBoxes = document.querySelectorAll(".checkbox");
let btnEnviar = document.getElementById("enviar");
let descricao = document.getElementById("descricao");


const soma = btnSoma.addEventListener("click", () => {
    display += 1;
    document.getElementById("display").value = display;
});

const subtracao = btnSub.addEventListener("click", () => {
    display -= 1;
    if(display>=0){
        document.getElementById("display").value = display;
    }
    else{
        display = 0;
    }
});

let compra = {
    linguagen: [],
    quantidade: "",
    descricao: ""
}

btnEnviar.addEventListener("click", (e) => {
    let aux=0;
    compra.linguagen = [];
    display = +document.getElementById("display").value;
    checkBoxes.forEach(checkBox => {
        if(checkBox.checked){
            compra.linguagen.push(checkBox.value);
            aux++;
        }
    });
    if(aux == 0 || display == "0"){
        e.preventDefault();
        if(aux == 0){alert("Selecione uma linguagem");}
        else alert("Digite um valor");        
        return;
    }

    compra.quantidade = display;
    compra.descricao = descricao.value;
    console.log(compra);
    alert("solicitação enviada com sucesso " + compra.linguagen + " " + compra.quantidade + " " + compra.descricao);    
    // zerar();
});

const zerar = () => {
    descricao.value = "";
    checkBoxes.forEach(checkBox => {
        checkBox.checked = false;
    });
    document.getElementById("display").value = "";
}

