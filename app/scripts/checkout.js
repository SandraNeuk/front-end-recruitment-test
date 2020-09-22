const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const country = document.getElementById('country');
const postalCode = document.getElementById('postal-code');
const phoneNumber = document.getElementById('phone-number');
const creditCardNumber = document.getElementById('credit-card-number');
const securityCode = document.getElementById('security-code');
const expirationDate = document.getElementById('expiration-date');

setDefaultFormValues();
initializeEvents();

function setDefaultFormValues() {
    firstName.defaultValue = 'Elon';
    lastName.defaultValue = 'Musk';
    email.defaultValue = 'elon@spacex.com';
    postalCode.defaultValue = 10001;
    phoneNumber.defaultValue = '(212) 692-93-92';
    creditCardNumber.defaultValue = '0000 - 0000 - 0000 - 0000';
    securityCode.defaultValue = '***';
    expirationDate.defaultValue = 'MM / YY';
}

function initializeEvents() {
    firstName.onfocus = () => { onInputFocused(firstName) };
    lastName.onfocus = () => { onInputFocused(lastName) };
    email.onfocus = () => { onInputFocused(email) };
    postalCode.onfocus = () => { onInputFocused(postalCode) };
    phoneNumber.onfocus = () => { onInputFocused(phoneNumber) };
    creditCardNumber.onfocus = () => { onInputFocused(creditCardNumber) };
    securityCode.onfocus = () => { onInputFocused(securityCode) };
    expirationDate.onfocus = () => { onInputFocused(expirationDate) };

    firstName.onblur = () => { onInputBlur(firstName) };
    lastName.onblur = () => { onInputBlur(lastName) };
    email.onblur = () => { onInputBlur(email) };
    postalCode.onblur = () => { onInputBlur(postalCode) };
    phoneNumber.onblur = () => { onInputBlur(phoneNumber) };
    creditCardNumber.onblur = () => { onInputBlur(creditCardNumber) };
    securityCode.onblur = () => { onInputBlur(securityCode) };
    expirationDate.onblur = () => { onInputBlur(expirationDate) };
}

function onInputFocused(input) {
    if (input.value === input.defaultValue) {
        input.value = '';
    }
}

function onInputBlur(input) {
    if (input.value === '') {
        input.value = input.defaultValue;
    }
}