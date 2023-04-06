
const hero = document.getElementById('hero')
const secHeroImage = document.getElementById('hero-image')
const secHeroInner = document.getElementById('hero-inner')
const artHeroOption = document.getElementById('hero-option')
const artLogin = document.getElementById('hero-sign-up')

const btnSignUp = document.getElementById('btn-sign-up')

btnSignUp.addEventListener('click', ()=>{
    hero.classList.toggle('column-direction')
    secHeroInner.style.backgroundColor = "#FFFFFF"
    artHeroOption.style.display = "none"
    artLogin.style.display = "block"
})