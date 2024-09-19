interface IFormData {
    [key: string]: string | boolean | undefined;
};

const form: HTMLElement | null = document.getElementById('form');
const inputEmail: HTMLInputElement | null = document.querySelector("[name=email]");
const inputETitle: HTMLInputElement | null = document.querySelector("[name=title]");
const texareaText: HTMLTextAreaElement | null = document.querySelector("[name=text]");
const inputCheckbox: HTMLInputElement | null = document.querySelector("[name=checkbox]");
const buttonSubmit: HTMLButtonElement | null = document.querySelector('button');

buttonSubmit?.addEventListener('click', sentForm);

function sentForm(event: Event) {
    event.preventDefault();

    const formData = {
        email: inputEmail?.value,
        title: inputETitle?.value,
        text: texareaText?.value,
        checkbox: inputCheckbox?.checked,
    };

    if (validateFormData(formData)) {
        checkFormData(formData)
    } else {
        console.log("Please, complete all fields");
        return false;
    }
}

function validateFormData(formData: IFormData) {
    for (const el in formData) {
        if (!formData[el]) return false;
    }

    return true;
}

function checkFormData(formData: IFormData) {
    const { email } = formData;
    const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

    if (emails.includes(email)) {
        console.log("This email is already exist");
    } else {
        console.log("Posting data...");
    }
}