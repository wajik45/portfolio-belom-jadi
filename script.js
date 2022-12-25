const konten = document.querySelector('.konten');
// Nav
const navbar = document.querySelector('.navbar');
window.onscroll = _ => {
    if (this.scrollY > 5) {
        navbar.style.borderBottom = '1px solid rgba(100, 116, 139, .2)';
    } else {
        navbar.style.borderBottom = 'none';
    }
}
// Akhir Nav

// Mode
const mode = document.querySelector('.mode'),
geser = document.querySelector('.geser');
dekor = document.querySelector('.dekor');

mode.onclick = function() {
    this.classList.toggle('bg-putih');
    
    geser.classList.toggle('tr-100');
    geser.classList.toggle('bg-item');
    geser.classList.toggle('border-putih');

    dekor.classList.toggle('bg-putih');

    konten.classList.toggle('bg-item');
}
// Akhir Mode

// Menu
const ul = document.querySelector('ul');
const li = document.querySelectorAll('nav li');

function Menu() {
    ul.classList.toggle('xy-nol');
    ul.classList.toggle('opasiti-satu');

    setTimeout( _ => {
        mode.classList.toggle('xy-nol');
        mode.classList.toggle('opasiti-satu');
    }, 200); 
}
konten.onclick = (e) => {
    if (e.target.classList.contains('front')) {
        Menu();
    } else if (ul.classList.contains('xy-nol')) {
        if (e.target != ul && e.target != li[0] && e.target != li[1] && e.target != li[2] && e.target != li[3]) {
            Menu();
        }
    }
}
// Akhir Menu