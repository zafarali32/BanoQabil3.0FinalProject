//------------------------sign in / sign up

let signUpBtn =document.querySelector(`.signupbtn`);
let signInBtn =document.querySelector(`.signinbtn`);
let nameField =document.querySelector(`.namefield`);
let title =document.querySelector(`.title`);
let underline =document.querySelector(`.underline`);
let text = document.querySelector(`.text`)


signInBtn.addEventListener(`click`,()=>{
    nameField.style.maxHeight =`0`;
    title.innerHTML = `Sign In`;
    text.innerHTML = `Lost Password`;
    signUpBtn.classList.add(`disable`);
    signInBtn.classList.remove(`disable`);
    underline.style.transform = `translateX(35px)`;
});


signUpBtn.addEventListener(`click`,()=>{
    nameField.style.maxHeight = `60px`;
    title.innerHTML = `Sign Up`;
    text.innerHTML = `Password Suggestion`;
    signUpBtn.classList.remove(`disable`);
    signInBtn.classList.add(`disable`);
    underline.style.transform = `translateX(0)`;
});


//---------shop page -------------

function login (){
    let useremail=document.getElementById("user-email").value;
    let password2=document.getElementById("user-password").value;



    let website_useremail="zafarsalar@gmail.com";
    let website_userpassword="123456";

    if(useremail == website_useremail && password2 == website_userpassword){
        window.location="shop.html"
    }

}