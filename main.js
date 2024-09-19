"use strict";
;
const form = document.getElementById('form');
const inputEmail = document.querySelector("[name=email]");
const inputETitle = document.querySelector("[name=title]");
const texareaText = document.querySelector("[name=text]");
const inputCheckbox = document.querySelector("[name=checkbox]");
const buttonSubmit = document.querySelector('button');
buttonSubmit === null || buttonSubmit === void 0 ? void 0 : buttonSubmit.addEventListener('click', sentForm);
function sentForm(event) {
    event.preventDefault();
    const formData = {
        email: inputEmail === null || inputEmail === void 0 ? void 0 : inputEmail.value,
        title: inputETitle === null || inputETitle === void 0 ? void 0 : inputETitle.value,
        text: texareaText === null || texareaText === void 0 ? void 0 : texareaText.value,
        checkbox: inputCheckbox === null || inputCheckbox === void 0 ? void 0 : inputCheckbox.checked,
    };
    if (validateFormData(formData)) {
        checkFormData(formData);
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function validateFormData(formData) {
    for (const el in formData) {
        if (!formData[el])
            return false;
    }
    return true;
}
function checkFormData(formData) {
    const { email } = formData;
    const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    if (emails.includes(email)) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
