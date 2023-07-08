let signUpForm = document.querySelector('.sign-up-form');
let successMessageCard = document.querySelector('.success-message');

signUpForm.classList.add('active');
successMessageCard.classList.remove('active');

let signUpButton = document.querySelector('.sign-up-form .submit-btn');
let dismissButton = document.querySelector('.success-message .submit-btn');
let emailField = document.querySelector(".sign-up-form .email-field");
let successMessageEmail = document.querySelector(".success-message .description strong");

signUpButton.onclick = () => {
    let email = emailField.value;
    let emailValidationRegEx = /\w+@\w+\.(com|net|org)/;
    if (email === '' || !emailValidationRegEx.test(email)) {
        emailField.parentElement.classList.add('error');
        emailField.parentElement.dataset['errorMessage'] = (email === '') ? "Can't be empty" : 'Invalid email';
    } else {
        emailField.parentNode.classList.remove('error');
        successMessageEmail.innerHTML = email;
        
        signUpForm.classList.remove('active');
        successMessageCard.classList.add('active');
    }
}

dismissButton.onclick = () => {
    emailField.value = '';
    signUpForm.classList.add('active');
    successMessageCard.classList.remove('active');   
}