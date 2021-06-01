// script de troca de página
function trocaPag() {
    if (activeItem == 1) {
        document.getElementById('pag-portfolium').style.display = 'none';
        document.getElementById('pag-hoIam').style.display = 'flex';
    } else {
        document.getElementById('pag-portfolium').style.display = 'flex';
        document.getElementById('pag-hoIam').style.display = 'none';
    }
}

// scripts de seleção de sessão
let activeItem = 0
let liItem0 = document.getElementById('li-item-0');
let liItem1 = document.getElementById('li-item-1');
liItem0.addEventListener('click', () => {
    if (activeItem == 1) {
        liItem1.style.backgroundColor = '#212121';
    }
    liItem0.style.backgroundColor = '#424242';
    activeItem = 0
    trocaPag();
});

liItem1.addEventListener('click', () => {
    if (activeItem == 0) {
        liItem0.style.backgroundColor = '#212121';
    }
    liItem1.style.backgroundColor = '#424242';
    activeItem = 1
    trocaPag();
});