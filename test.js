const formBox = document.querySelector(".form-box");
const signIn = document.querySelector("#signIn");
const signUp = document.querySelector("#signUp");
const body = document.body;

signUp.addEventListener  ('click' ,() => {
    formBox.classList.add('active')
    body.classList.add("active")});

signIn.addEventListener  ('click' ,() => {
    formBox.classList.remove('active')
    body.classList.remove("active")});