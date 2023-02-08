// 4.- Escribiendo Javascript Desde Htmlconst h1 = document.querySelector('h1');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Hola <br> Chao";
h1.innerText = "Hola <br> Chao";
// console.log(h1.getAttribute("pantalla"));
// h1.setAttribute("class", "rojo");

h1.classList.add("rojo");
h1.classList.remove("verde");

input.value = "456";
input.placeholder = "Wena Wena los cabros";

const img = document.createElement('img');
img.setAttribute("src", "https://i1.sndcdn.com/artworks-ZpLFMzx9jt18MKjd-RJrsIg-t500x500.jpg");
console.log(img);

pid.append(img);
