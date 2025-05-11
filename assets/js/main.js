const menu = document.querySelector('header')

window.sr = ScrollReveal({ reset: true });

sr.reveal('.bloco__inicio', { duration: 1500 });

sr.reveal('.bloco__sobre', { 
    rotate: { x:0, y:80, z:0},
    delay: 500,
    duration: 2000
});

sr.reveal('.bloco__projetos', { 
    rotate: { x:80, y:0, z:0},
    delay: 500,
    duration: 2000 });

sr.reveal('.bloco__habilidades', { duration: 1500 });

sr.reveal('.bloco__contato', { duration: 1000 });

sr.reveal('.flashcard', { 
    delay: 500,
    duration: 1500
});

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 10);
}

window.addEventListener('scroll', activeScroll);

// slider animation

let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function(){
    nextImage();
}, 10000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById('radio'+count).checked = true;


}