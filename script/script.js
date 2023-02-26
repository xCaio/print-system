nome = window.document.querySelector("#nome");
idade = window.document.querySelector("#idade");
nExame = window.document.querySelector("#nExame");


labelNome = window.document.querySelector("#labelNome");
labelIdade = window.document.querySelector("#labelIdade");
labelNExame = window.document.querySelector("#labelNExame");

function enviar (){
    labelNome.innerHTML = nome.value;
    labelIdade.innerHTML = idade.value;
    labelNExame.innerHTML = nExame.value;
}