const hamburger = document.querySelector('.navbar__hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close')

hamburger.addEventListener('click', (event) => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active')
});

let html = document.querySelector("html")
document.querySelector(".navbar__hamburger").onclick = function(){
    html.classList.add("unscroll")
}
document.querySelector(".menu__close").onclick = function(){
    html.classList.remove("unscroll")
}