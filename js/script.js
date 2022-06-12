const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
var score = 0;
const jump = () => {
    mario.classList.add('jump');
    score++;
    console.log(score);
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // captura o bottom instantaneo do componente especificado , replace tira px e coloca vazio , e o + força conversao para numero
    const cloudPosition = cloud.offsetLeft;


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;
        pipe.style.left = `${pipePosition}px`; //template literals , passa o valor da propria posição
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; //template literals , passa o valor da propria posição

        mario.src = 'Imagens/game-over.png'; // muda imagem 
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); // limpa o intervalo
    } else {


    }
}, 10);


document.addEventListener('keydown', jump); // chama rotina jump quando clica no teclado