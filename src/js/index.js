/*
 mostrar imagem de fundo a medida que clica no botão
*/
//Pegar o elemento HTML do botão
const botoesC = document.querySelectorAll('.botao');
const imList = document.querySelectorAll('.imagem');
const descList = document.querySelectorAll('.descricao');
//Identifica o clique
botoesC.forEach((botao, i)=>{
    botao.addEventListener('click', ()=>{
        //desmarcar o botao anterior e marcar o que foi clicado
        const btSelecionado = document.querySelector('.selecionado');
        btSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');
        // mudar imagem e texto a medida que clica-se no botão
        const imAtiva = document.querySelector('.ativa');
        const descAtiva = document.querySelector('.selecionada');
        imAtiva.classList.remove('ativa');
        descAtiva.classList.remove('selecionada');
        imList[i].classList.add('ativa');
        descList[i].classList.add('selecionada');
    })    
})
