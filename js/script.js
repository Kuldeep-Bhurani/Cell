let mouseCursor = document.querySelector(".cursor");
let cards = document.querySelectorAll(".card");
let cursorDiv = document.getElementById("cursor");

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
};

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        mouseCursor.classList.add("c-grow");
    });
    card.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("c-grow");
    });
});

const modal1 = document.getElementById('modal1')
const openModal1 = document.querySelector('.open-button-1');
const closeModal1 = document.querySelector('.close-button-1');

function openModal1func() {
    modal1.showModal();
    document.body.classList.remove("no-mouse");
    cursorDiv.classList.remove("cursor")
};

closeModal1.addEventListener('click', () => {
    modal1.close();
    document.body.classList.add("no-mouse");
    cursorDiv.classList.add("cursor")
});

const modal2 = document.getElementById('modal2')
const openModal2 = document.querySelector('.open-button-2');
const closeModal2 = document.querySelector('.close-button-2');

function openModal2func() {
    modal2.showModal();
    document.body.classList.remove("no-mouse");
    cursorDiv.classList.remove("cursor")
};

closeModal2.addEventListener('click', () => {
    modal2.close();
    document.body.classList.add("no-mouse");
    cursorDiv.classList.add("cursor")
});

const modal3 = document.getElementById('modal3')
const openModal3 = document.querySelector('.open-button-3');
const closeModal3 = document.querySelector('.close-button-3');

function openModal3func() {
    modal3.showModal();
    document.body.classList.remove("no-mouse");
    cursorDiv.classList.remove("cursor")
};

closeModal3.addEventListener('click', () => {
    modal3.close();
    document.body.classList.add("no-mouse");
    cursorDiv.classList.add("cursor")
});

const modal4 = document.getElementById('modal4')
const openModal4 = document.querySelector('.open-button-4');
const closeModal4 = document.querySelector('.close-button-4');

function openModal4func() {
    modal4.showModal();
    document.body.classList.remove("no-mouse");
    cursorDiv.classList.remove("cursor")
};

closeModal4.addEventListener('click', () => {
    modal4.close();
    document.body.classList.add("no-mouse");
    cursorDiv.classList.add("cursor")
});

const modal5 = document.getElementById('modal5')
const openModal5 = document.querySelector('.open-button-5');
const closeModal5 = document.querySelector('.close-button-5');

function openModal5func() {
    modal5.showModal();
    document.body.classList.remove("no-mouse");
    cursorDiv.classList.remove("cursor")
};

closeModal5.addEventListener('click', () => {
    modal5.close();
    document.body.classList.add("no-mouse");
    cursorDiv.classList.add("cursor")
});

const modal6 = document.getElementById('modal6')
const openModal6 = document.querySelector('.open-button-6');
const closeModal6 = document.querySelector('.close-button-6');

function openModal6func() {
    modal6.showModal();
    document.body.classList.remove("no-mouse");
    cursorDiv.classList.remove("cursor")
};

closeModal6.addEventListener('click', () => {
    modal6.close();
    document.body.classList.add("no-mouse");
    cursorDiv.classList.add("cursor")
});

const modal7 = document.getElementById('modal7')
const openModal7 = document.querySelector('.open-button-7');
const closeModal7 = document.querySelector('.close-button-7');

function openModal7func() {
    modal7.showModal();
    document.body.classList.remove("no-mouse");
    cursorDiv.classList.remove("cursor")
};

closeModal7.addEventListener('click', () => {
    modal7.close();
    document.body.classList.add("no-mouse");
    cursorDiv.classList.add("cursor")
});

const modal8 = document.getElementById('modal8')
const openModal8 = document.querySelector('.open-button-8');
const closeModal8 = document.querySelector('.close-button-8');

function openModal8func() {
    modal8.showModal();
    document.body.classList.remove("no-mouse");
    cursorDiv.classList.remove("cursor")
};

closeModal8.addEventListener('click', () => {
    modal8.close();
    document.body.classList.add("no-mouse");
    cursorDiv.classList.add("cursor")
});

const modal9 = document.getElementById('modal9')
const openModal9 = document.querySelector('.open-button-9');
const closeModal9 = document.querySelector('.close-button-9');

function openModal9func() {
    modal9.showModal();
    document.body.classList.remove("no-mouse");
    cursorDiv.classList.remove("cursor")
};

closeModal9.addEventListener('click', () => {
    modal9.close();
    document.body.classList.add("no-mouse");
    cursorDiv.classList.add("cursor")
});