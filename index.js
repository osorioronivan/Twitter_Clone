
const hero = document.getElementById('hero')
const secHeroImage = document.getElementById('hero-image')
const secHeroInner = document.getElementById('hero-inner')
const artHeroOption = document.getElementById('hero-option')
const artLogin = document.getElementById('hero-sign-up')

const btnSignUp = document.getElementById('btn-sign-up')
const btnSignIn = document.getElementById('btn-sign-in')

const frmSignIn = document.getElementById('frm-Sign-In')

const txtEmail = document.getElementById('txtEmail')
const lblEmail = document.getElementById('lblEmail')



btnSignUp.addEventListener('click', ()=>{
    hero.classList.toggle('column-direction')
    secHeroInner.style.backgroundColor = "#FFFFFF"
    artHeroOption.style.display = "none"
    artLogin.style.display = "block"
})

btnSignIn.addEventListener('click', saveForm)

function templateUser(name,email,username, pass){
    this.name = name,
    this.email = email,
    this.username = username
    this.pass = pass
}

function saveForm(){
    const frmUser = new FormData(frmSignIn)
    let user = new templateUser(frmUser.get('txtname'), 
        frmUser.get('txtEmail'),
        frmUser.get('txtUserName'),
        frmUser.get('txtPassword'))
    localStorage.setItem(user.username, user)
}