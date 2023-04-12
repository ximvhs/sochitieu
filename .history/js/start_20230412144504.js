const regBtns = document.querySelectorAll('.js-register')
const modal = document.querySelector('.js-show_register')
function showModal() {
    modal.classList.add('open')
    modal1.classList.remove('open')
}
for (const regBtn of regBtns) {
    regBtn.addEventListener('click', showModal)
}





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

const tk=document.getElementById("emaillogin")
const btnLogin=document.getElementById("btnlogin")
const mk=document.getElementById("passlogin")
btnLogin.addEventListener('click',function(){
    if(tk.value==="ximvhs26092002@gmail.com"){
        if(mk.value=="e"){
            window.location.href="index.html"    
        }
    } else{
        alert('Tài khoản hoặc mặt khẩu của bạn bị sai')
    }
})

// Lắng nghe sự kiện submit trên biểu mẫu đăng nhập
const form = document.querySelector('#btnlogin');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Ngăn chặn trình duyệt gửi yêu cầu đăng nhập mặc định

  // Lấy giá trị tên người dùng và mật khẩu từ các trường nhập liệu
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Kiểm tra tên người dùng và mật khẩu
  if (username === 'admin' && password === 'admin') {
    // Nếu đúng, điều hướng đến trang HTML khác
    window.location.href = 'new-page.html';
  } else {
    // Nếu sai, hiển thị thông báo lỗi
    const error = document.querySelector('#error-message');
    error.textContent = 'Tên người dùng hoặc mật khẩu không chính xác.';
  }
});

