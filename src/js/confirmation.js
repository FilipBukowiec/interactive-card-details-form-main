

const form = document.getElementById("Form");

export const Confirmation = function () {
    console.log("jupi");
    form.innerHTML = `<div class="thanks"><div class="accept"></div><h2>THANK YOU!</h2> <p> We've added your card details</p><button class="continue" id="Continue">Continue</button></div>`;
    const Continue = document.getElementById("Continue");
    Continue.addEventListener("click", () => location.reload());
}




