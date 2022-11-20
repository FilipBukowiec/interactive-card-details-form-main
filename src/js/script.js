// import { Confirmation } from "./confirmation.js";
// const Confirmbtn = document.getElementById("Sendbtn");
// Confirmbtn.addEventListener("click", (Confirmation));




// const form = document.getElementById("Form");
const name = document.getElementById('Name');
const Cardnumber = document.getElementById('Cardnumber');
const Month = document.getElementById('Month');
const CVC = document.getElementById('CVC');
const form = document.getElementById('Form');

const errorName = document.getElementById('errorName');
const error


form.addEventListener("submit", e => {
    e.preventDefault();

    //jeżeli wszystko ok to wysyłamy
    if (name.value.length >= 3) {
        form.submit();
    } else {
        //jeżeli nie to pokazujemy jakieś błędy
        errorName.innerHTML='blblb';
    }

    if (Cardnumber.value.length = 20 && Cardnumber.value.length = 20 ) {
        form.submit();
    } else {
        //jeżeli nie to pokazujemy jakieś błędy
        errorName.innerHTML='blblb';
    }



})