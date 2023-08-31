const container= document.querySelector('.container')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

container.addEventListener('click', () =>{
    nav.classList.add('open-nav')
    // nav.classList.add('close-nav')
})

close.addEventListener('click', () =>{
    nav.classList.add('close-nav')
    nav.classList.add('open-nav')
})