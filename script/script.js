let nome = window.document.querySelector("#nome");
let idade = window.document.querySelector("#idade");
let nExame = window.document.querySelector("#nExame");
let infoExame = window.document.querySelector("#infoNExame")

let labelNome = window.document.querySelector("#labelNome");
let labelIdade = window.document.querySelector("#labelIdade");
let labelNExame = window.document.querySelector("#labelNExame");


function enviar (){
    labelNome.innerHTML = nome.value;
    labelIdade.innerHTML = idade.value;
    labelNExame.innerHTML = nExame.value;
    var googleChartAPI = `http://bwipjs-api.metafloor.com/?bcid=code128&scale=3&text=${nExame.value}`
    document.querySelector("#labelNExame").src = googleChartAPI;
    infoExame.innerHTML = nExame.value;
    
}

