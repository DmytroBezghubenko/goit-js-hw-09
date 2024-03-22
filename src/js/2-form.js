const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input");

form.addEventListener("input", addText);
function addText(event) {
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();
    const objectData = { email, message };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objectData));
};

form.addEventListener("submit", submitForm);
function submitForm(event) {
        event.preventDefault();
    if (input.value !== "" && textarea.value !== "") {
        console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    } else {
       alert("Please fill in both email and message fields.");
    }
};

nonReset();
function nonReset() {
    const saveObj = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveObj) {
        input.value = saveObj.email;
        textarea.value = saveObj.message;
    }
}