
const hero = document.getElementById('hero')
const secHeroImage = document.getElementById('hero-image')
const secHeroInner = document.getElementById('hero-inner')
const artHeroOption = document.getElementById('hero-option')
const artLogin = document.getElementById('hero-sign-up')

const btnSignUp = document.getElementById('btn-sign-up')
const btnSignIn = document.getElementById('btn-sign-in')

const frmSignIn = document.getElementById('frm-Sign-In')

const txtName = document.getElementById('txtName')
const txtUserName = document.getElementById('txtUserName')
const txtPassword = document.getElementById('txtPassword')
const txtEmail = document.getElementById('txtEmail')
const lblEmail = document.getElementById('lblEmail')

const ErrMessages = [
    {
        id : "txtName",
        message:"What's your name?"
    },
    {
    id : "txtEmail",
    message:["What's your email address?", "Please enter a valid email"]
    },
    {
        id : "txtUserName",
        message:"Please enter your username"
    },
    {
        id : "txtPassword",
        message:"Please enter a password"
    }
]

const inputArr = frmSignIn.querySelectorAll('input').forEach(element => {
        element.addEventListener('focusout', (e)=>{
            const input = document.getElementById(e.target.id)
            const errorMsg = ErrMessages.filter((msg)=>{
             if (msg.id == e.target.id){
                 return msg
             } 
            })

            if(e.target.id === "txtEmail"){
                if (!input.value){
                    setError(input, errorMsg[0].message[0])
                }else if(!input.validity.valid){
                    setError(input, errorMsg[0].message[1])
                }
                else{
                    removeError(input)
                }
            }
            else if (!input.value){
                if(e.target.id === "txtEmail"){
                    if (!input.value){
                        setError(input, errorMsg[0].message[0])
                    }else{
                        setError(input, errorMsg[0].message[1])
                    }
                }else{
                    setError(input, errorMsg[0].message)
                }
            }
            else{
             removeError(input)
            }
         })
});


btnSignUp.addEventListener('click', ()=>{
    hero.classList.toggle('column-direction')
    secHeroInner.style.backgroundColor = "#FFFFFF"
    artHeroOption.style.display = "none"
    artLogin.style.display = "block"

    setTimeout(()=>{
        frmSignIn.innerHTML= 
        `     <div class="formGroup">
        <input type="text"  
        placeholder=" "
        required
        name="txtname"
        id="txtName"
        class="textboxState">
        <label class="lblName" for="txtName">Name</label>
        <small></small>
    </div>
  
    <div class="formGroup ">
        <input type="email"
        required
        placeholder=" "
        name="txtEmail" 
        id="txtEmail" 
        class="textboxState">
        <label id="lblEmail" class="lblEmail" for="txtEmail">Email Address</label>
        <small></small>
    </div>
    <div class="formGroup">
        <input type="text" 
        placeholder=" "
        required
        name="txtUserName"
        id="txtUserName" class="textboxState">
        <label class="lblUserName" for="txtUserName">Username</label>
        <small></small>
    </div>
    <div class="formGroup">
        <input type="password" 
        placeholder=" "
        required
        name="txtPassword" 
        id="txtPassword"  class="textboxState">
        <label class="lblPassword" for="txtPassword">Password</label>
        <small></small>
    </div>

    <p>By signing up, you agree that you accept our <a href="" class="terms">Terms and Condition</a></p>
    <button class="btn-sign-in" id="btn-sign-in">Sign up</button>`
    }, 1000)
})

btnSignIn.addEventListener('click', (e)=>{
    e.preventDefault()
    checkInput()
    const frmUser = new FormData(frmSignIn)
    let user = new templateUser(frmUser.get('txtname'), 
        frmUser.get('txtEmail'),
        frmUser.get('txtUserName'),
        frmUser.get('txtPassword'))
    localStorage.setItem(user.username, user)
})

function templateUser(name,email,username, pass){
    this.name = name,
    this.email = email,
    this.username = username
    this.pass = pass
}
function checkInput(){
    for (let element of ErrMessages){
        var input = document.getElementById(element.id)
        if (!input.value){
            setError(input, element.message)
           }else{
            removeError(input)
           }
    }

}
function setError(input, msg){
    const frmInput = input.parentElement
    const small = frmInput.querySelector('small')
    const label = frmInput.querySelector('label')
    input.classList.add('error')
    small.innerText = msg
    label.classList.add('errorFont')
    small.classList.add('errorFont')
}
function removeError(input){
    const frmInput = input.parentElement
    const small = frmInput.querySelector('small')
    const label = frmInput.querySelector('label')
    input.classList.remove('error')
    small.innerText = ""
    label.classList.remove('errorFont')
    small.classList.remove('errorFont')
}
