const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const country = document.getElementById('country');
const postalCode = document.getElementById('postal-code');
const phoneNumber = document.getElementById('phone-number');
const creditCardNumber = document.getElementById('credit-card-number');
const securityCode = document.getElementById('security-code');
const expirationDate = document.getElementById('expiration-date');

const validationStatus = document.getElementById('validation-status');

function initialize() {
    setDefaultFormValues();
    initializeEvents();
}

function setDefaultFormValues() {
    firstName.defaultValue = 'Elon';
    lastName.defaultValue = 'Musk';
    email.defaultValue = 'elon@spacex.com';
    postalCode.defaultValue = '10001';
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

    country.onchange = onCountryChanged;
}

function onInputFocused(input) {
    if (input.value === input.defaultValue) {
        input.value = '';
        input.style.color = 'black';
    }

    input.style.background = 'white';
}

function onInputBlur(input) {
    if (input.value === '') {
        input.value = input.defaultValue;
        input.style.color = '#a3a3a3';
    }
}

const regexpCapitalLetter = /^[A-Z]/;
const regexpEmail = /\S+@\S+\.\S+/;
const regexpPostalCodeUS = /(\d{5}([\-]\d{4})?)/;
const regexpPostalCodeUK = /[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}/;
const regexpPostalCodePL = /^([0-9]{2})(-[0-9]{3})?$/i;
const regexpPhoneNumber = /^\(?([0-9]{3})\)?[ ]?([0-9]{3})[-]?([0-9]{2})[-]?([0-9]{2})$/;
const regexpCreditCard = /^(?:\d[-]*?){13,16}$/;
const regexpSecurityCode = /^[0-9]{3}$/;
const regexpExpirationDate = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

function validateForm() {
    let info = '';
    let failedElements = [];

    if (firstName.value === firstName.defaultValue) {
        info += 'Name must be filled out<br>';
        failedElements.push(firstName);
    }
    else if (!regexpCapitalLetter.test(firstName.value))
    {
        info += 'Name must start with capital letter<br>';
        failedElements.push(firstName);
    }

    if (lastName.value === lastName.defaultValue) {
        info += 'Last name must be filled out<br>';
        failedElements.push(lastName);
    }
    else if (!regexpCapitalLetter.test(lastName.value))
    {
        info += 'Last name must start with capital letter<br>';
        failedElements.push(lastName);
    }

    if (email.value === email.defaultValue) {
        info += 'Email must be filled out<br>';
        failedElements.push(email);
    }
    else if (!regexpEmail.test(email.value))
    {
        info += 'Email is incorrect<br>';
        failedElements.push(email);
    }

    if (postalCode.value === postalCode.defaultValue) {
        info += 'Postal code must be filled out<br>';
        failedElements.push(postalCode);
    }
    else if (!getPostalCodeRegex().test(postalCode.value))
    {
        info += 'Postal code is incorrect<br>';
        failedElements.push(postalCode);
    }

    if (phoneNumber.value === phoneNumber.defaultValue) {
        info += 'Phone number must be filled out<br>';
        failedElements.push(phoneNumber);
    }
    else if (!regexpPhoneNumber.test(phoneNumber.value))
    {
        info += 'Phone number is incorrect<br>';
        failedElements.push(phoneNumber);
    }

    if (creditCardNumber.value === creditCardNumber.defaultValue) {
        info += 'Credit card number must be filled out<br>';
        failedElements.push(creditCardNumber);
    }
    else if (!regexpCreditCard.test(creditCardNumber.value))
    {
        info += 'Credit card number is incorrect<br>';
        failedElements.push(creditCardNumber);
    }

    if (securityCode.value === securityCode.defaultValue) {
        info += 'Security code must be filled out<br>';
        failedElements.push(securityCode);
    }
    else if (!regexpSecurityCode.test(securityCode.value))
    {
        info += 'Security code is incorrect<br>';
        failedElements.push(securityCode);
    }

    if (expirationDate.value === expirationDate.defaultValue) {
        info += 'Expiration date must be filled out<br>';
        failedElements.push(expirationDate);
    }
    else if (!regexpExpirationDate.test(expirationDate.value))
    {
        info += 'Expiration date is incorrect<br>';
        failedElements.push(expirationDate);
    }

    validationStatus.innerHTML = failedElements.length === 0 ? 'Success!' : info;
    validationStatus.style.color = failedElements.length === 0 ? 'green' : 'red';

    failedElements.forEach(element => {
        element.style.background = 'salmon';
    });
}

function onCountryChanged() {
    switch (country.options[country.selectedIndex].value) {
        case 'United States':
            postalCode.defaultValue = '10001';
            break;
        case 'Poland':
            postalCode.defaultValue = '10-001';
            break;
        case 'United Kingdom':
            postalCode.defaultValue = 'AA9A 9AA';
            break;
        default:
            break;
    }
    postalCode.value = postalCode.defaultValue
}

function getPostalCodeRegex() {
    switch (country.options[country.selectedIndex].value) {
        case 'United States':
            return regexpPostalCodeUS;
        case 'Poland':
            return regexpPostalCodePL;
        case 'United Kingdom':
            return regexpPostalCodeUK;
        default:
            break;
    }
}

export { initialize, validateForm }