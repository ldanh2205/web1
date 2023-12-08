// Javascript cửa sổ hiện ra
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconCloseLog = document.querySelector('.icon-closelog');
const iconCloseReg = document.querySelector('.icon-closereg');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})

iconCloseLog.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})
iconCloseReg.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})
function changePage(){
    window.location.href='admin.html';
}
function changeLogin(flag){
    var wrapper = document.querySelector('.wrapper');
    if(flag){
        wrapper.classList.remove('active')
    }
    else{
        wrapper.classList.add('active');
    }
}
function closeform(){
    var userlogin = JSON.parse(localStorage.getItem('userlogin'));
    var wrapper = document.querySelector('.wrapper');

    if (userlogin) {
        wrapper.classList.remove('active');
        wrapper.classList.remove('active-popup');
    } else {
        wrapper.classList.add('active');
    }
}
function resetAdminStatus(){
    var upateAdminStat = [false, ''];
    localStorage.setItem('adminStatus', JSON.stringify(upateAdminStat));
  }
  window.onload = resetAdminStatus();


function logout(){
    localStorage.removeItem('userlogin')
    window.location.href='index.html'
}
window.onload = changeBTN;
function changeBTN(){
    var userlogin=JSON.parse(localStorage.getItem('userlogin'));
    if(userlogin){
        document.querySelector('.user.login').style.display='none';
        let x = [];
        localStorage.setItem('cart',x);
        document.querySelector('.user.logout').style.display='block';
        
        document.getElementById('logout').innerHTML= 'Hello, ' + userlogin.name;
    }
    else{
        document.querySelector('.user.login').style.transform='block';
        document.querySelector('.user.logout').style.transform='none';
    }
};



//Javascript lưu thông tin tài khoản đăng ký vào localStorage
var users;
if(window.localStorage.getItem('users')){
    users=JSON.parse(window.localStorage.getItem('users'))
}
else{
    users = [];
}

function signUp(e){
    event.preventDefault();
    var nameSignUp = document.getElementById('nameSignUp').value;
    var username = document.getElementById('usernameSignUp').value;
    var email = document.getElementById('emailSignUp').value;
    var password = document.getElementById('passwordSignUp').value;
    var conPass = document.getElementById('confirm_password').value;
    var flag = true;
    
     var check1 = email.endsWith('@gmail.com');
    var checkEmail = /^[a-zA-Z0-9]+$/; 
    var check3 = /^[a-zA-Z0-9]+$/.test(username);
    var check2 = checkEmail.test(email.split('@')[0]);

     if(!nameSignUp){
        document.getElementById('nameerror').style.display='block';
        flag = false;
    }
    else{
        document.getElementById('nameerror').style.display='none';
    }   

    if(!username){
        document.getElementById('usernameerror').style.display='block';
        flag = false;
    }
    else if(!check3){
        document.getElementById('usernameerror').style.display='block';
        document.getElementById('usernameerror').innerHTML='Nhập sai cú pháp';
        flag = false;
    }
    else{
        document.getElementById('usernameerror').style.display='none';
    }   
    if(!email){
        document.getElementById('emailerror').style.display='block';
        document.getElementById('emailerror').innerHTML='Bạn chưa nhập email';
        flag = false;
    }
    else if(!check1||!check2){
            document.getElementById('emailerror').style.display='block';
            document.getElementById('emailerror').innerHTML='Nhập sai cú pháp'
            flag = false;
        }
    else{
        document.getElementById('emailerror').style.display='none';
        
    }
    if(!password){
        document.getElementById('passworderror').style.display='block';
        flag = false;
    }
    else if(password.length<8){
        document.getElementById('passworderror').style.display='block';
        document.getElementById('passworderror').innerHTML='Mật khẩu phải tối thiểu 8 chữ số';
        flag = false;
    
    }
    else{
        document.getElementById('passworderror').style.display='none';
    }
    if(password != conPass){
        document.getElementById('confirmerror').style.display='block';
       flag = false;
    }
    else{
        document.getElementById('confirmerror').style.display='none'; 
    }
    
    var user = {
        name: nameSignUp,
        username: username,
        email: email,
        password: password,
    };
    for(let saveUser of users){
            console.log(saveUser);
            if(saveUser.username==username){
                flag = false;
                document.getElementById('usernameerror').style.display='block'
                document.getElementById('usernameerror').innerHTML='Tên đăng nhập đã tồn tại'
            }
            if(saveUser.email == email){
                flag = false;
                document.getElementById('emailerror').style.display='block'
                document.getElementById('emailerror').innerHTML='Email này đã được sử dụng '
            }
            if(!flag){
                break;
            }
        }
    if(flag == true){
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        changeLogin(flag);
        alert('Đăng ký thành công');
        }
}

function login(e){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var users = JSON.parse(localStorage.getItem('users'));
    var adminAccounts = JSON.parse(localStorage.getItem('adminAcc'));
    var flag = false;
    // if(username === '' || password === ''){
    //     alert('Vui Lòng Không Để Trống')
    // }
    for(let saveUser of users){
        if(saveUser.username == username && saveUser.password == password)
        {   
            flag = true
            var userlogin = localStorage.setItem('userlogin',JSON.stringify(saveUser))
            alert('Đăng Nhập Thành Công')
            // window.location.href='index.html';
            closeform();
            changeBTN();
            location.reload();
            
            return;
        }
    }
    for(let adminAcc of adminAccounts){
        if(adminAcc.username == username && adminAcc.password == password){
            flag = true;
            var adminlogin = localStorage.setItem('adminlogin',JSON.stringify(adminAcc));
            var upateAdminStat = [true, adminAcc.name];
            localStorage.setItem('adminStatus', JSON.stringify(upateAdminStat));
            console.log(window.history.length);
            changePage();
            return;
        }
    }
    if(!flag){
        alert('Nhập sai tên đăng nhập hoặc mật khẩu');
    }
}
