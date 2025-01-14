let button = document.querySelector("#Login");
button.addEventListener("click", () => {
    let loginSection = document.querySelector("#loginSection");
    let signupSection = document.querySelector("#signupSection");
    loginSection.style.display = "block";
    signupSection.style.display = "none";
});

let button2 = document.querySelector("#Signup");
button2.addEventListener("click", () => {   
    let loginSection = document.querySelector("#loginSection");
    let signupSection = document.querySelector("#signupSection");    
    loginSection.style.display = "none";    
    signupSection.style.display = "block";
})