const regBtns = document.querySelectorAll('.js-register')
const modal = document.querySelector('.js-show_register')
function showModal() {
    modal.classList.add('open')
    modal1.classList.remove('open')
}
for (const regBtn of regBtns) {
    regBtn.addEventListener('click', showModal)
}

const tk=document.getElementById("emaillogin")
const btnLogin=document.querySelector('#btnlogin')
const mk=document.getElementById("passlogin")
btnLogin.addEventListener('click',function(){
    if(tk.value=="1"){
        if(mk.value=="26092002")
            window.location.href="./index.html"
    } else{
        alert('Sai email')
    }
})




// close register
const closeBtn = document.querySelector('.js-close')
function hideBtn(){
    modal.classList.remove('open')
}
closeBtn.addEventListener('click', hideBtn)


// close when click outward
const authForms = document.querySelectorAll('.js-auth-form')
modal.addEventListener('click', hideBtn)
for (const authForm of authForms ) { 
    authForm.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}

