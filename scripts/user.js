const userlogin = localStorage.getItem('userlogin')
const userLink = document.querySelector('.user')

/*if(userlogin){
    userLink.innerHTML = '<i class="fa-solid fa-user-check"></i>' +
                         '<div class="state">' +
                            '<p class="user-text"></p>'  +
                            '<p class="logout"><i class="fa-solid fa-right-from-bracket"></i> Đăng xuất</p>' +
                         '</div>'
    
    const userWelcome = document.querySelector('.user-text')
    const userState = document.querySelector('.state')
    const logOut = document.querySelector('.logout')                     
    userWelcome.innerHTML = 'Xin chào, ' + isLoggedIn + '!'
    userLink.addEventListener('click', function(){
        userState.classList.toggle('logged')
    })
    logOut.addEventListener('click', function logOut(){
        localStorage.removeItem('isloggedin')
        window.location.reload()
})
}*/

//navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var topElement = document.querySelectorAll(".top-menu div a")
    header.classList.toggle("sticky", window.scrollY > 50);
    // topElement.classList.toggle("sticky", window.scrollY > 0);
})

const menuBtn = document.querySelector('.dropdown');

/*menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('drop');
})*/

window.onbeforeunload = function () {
    if(window.scrollTo) window.scrollTo(0,0);
};