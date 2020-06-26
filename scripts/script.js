const res = document.querySelector('.content .res')
const button = document.querySelector('section button')
var coisas = ["Japonga", "Jorge", "Vitinho", "Anon"]
var randomItem = coisas[Math.floor(Math.random()*coisas.length)];

button.addEventListener('click', () => {
    res.innerHTML = ''
    res.value = ''
    res.innerHTML = randomItem
})