// import { Confirmation } from "./confirmation.js";
// const Confirmbtn = document.getElementById("Sendbtn");





// const form = document.getElementById("Form");
const name = document.getElementById('Name');
const CardNumber = document.getElementById('Cardnumber');
const Month = document.getElementById('Month');
const CVC = document.getElementById('CVC');
const form = document.getElementById('Form');

const errorName = document.getElementById('errorName');
const errorCardNumber = document.getElementById('errorCardNumber')


form.addEventListener("submit", e => {
    e.preventDefault();
    if (name.value.length >= 3) {
        name.classList.replace('error', 'success')
        name.classList.add("success");
        errorName.innerText = "";
        // form.submit();

    } else if (name.value === '' || name.value == null) {
        errorName.innerText = "This field can't be blank";
        name.classList.replace('succes', 'error')
        name.classList.add('error');

    } else if (name.value.length <= 2) {
        name.classList.replace('succes', 'error')
        name.classList.add('error');
        errorName.innerText = 'The name is too short';




    }
})