// brings these IDs in from index.html
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

// waits for 'click' and toggles(ID) the button (EL)
toggle.addEventListener('click', () =>{
    nav.classList.toggle('active')
})