// import { Confirmation } from "./confirmation.js";
// const Confirmbtn = document.getElementById("Sendbtn");

// const form = document.getElementById("Form");
const name = document.getElementById("Name");
const CardNumber = document.getElementById("Cardnumber");
const Month = document.getElementById("Month");
const Year = document.getElementById("Year");
const CVC = document.getElementById("CVC");
const form = document.getElementById("Form");
const letters = /^[A-Za-z\s]+$/;
const numbers = /^[0-9]+$/;
const lol = !/^[0-9]+$/;
const all = letters + numbers;

const errorName = document.getElementById("errorName");
const errorCardNumber = document.getElementById("errorCardNumber");
const errorMonth = document.getElementById("errorMonth");
const errorYear = document.getElementById("errorYear");
const errorCvc = document.getElementById("errorCvc");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (name.value.length >= 3 && name.value.match(letters)) {
        name.classList.replace("error", "success");
        name.classList.add("success");
        errorName.innerText = "";
        // form.submit();
    } else {
        name.classList.replace("succes", "error");
        name.classList.add("error");
        errorName.innerText =
            "This field should be a minimum of 3 characters, letters only";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (CardNumber.value.length === 20 && CardNumber.value.match(numbers)) {
        CardNumber.classList.replace("error", "success");
        CardNumber.classList.add("success");
        errorCardNumber.innerText = "";
    } else {
        errorCardNumber.innerText =
            "This field should be contains 20 characters, numbers only";
        CardNumber.classList.replace("succes", "error");
        CardNumber.classList.add("error");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (Month.value.length === 2 && Month.value.match(numbers)) {
        Month.classList.replace("error", "success");
        Month.classList.add("success");
        errorMonth.innerText = "";

    } else {
        Month.classList.replace("succes", "error");
        Month.classList.add("error");
        errorMonth.innerText = "Enter the month correctly";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (Year.value.length === 4 && Year.value.match(numbers)) {
        Year.classList.replace("error", "success");
        Year.classList.add("success");
        errorYear.innerText = "";

    } else {
        Year.classList.replace("succes", "error");
        Year.classList.add("error");
        errorYear.innerText = "Enter the year correctly";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (CVC.value.length === 3 && CVC.value.match(numbers)) {
        CVC.classList.replace("error", "success");
        CVC.classList.add("success");
        errorCvc.innerText = "";

    } else {
        CVC.classList.replace("succes", "error");
        CVC.classList.add("error");
        errorCvc.innerText =
            "This field should be contains 3 characters, numbers only";
    }
});
