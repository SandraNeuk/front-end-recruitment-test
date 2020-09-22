import { cloneBacon, countBacon } from './bacon/baconManager.js';
import { initialize, validateForm } from './bacon/formValidator.js';

const cloneBaconButton = document.getElementById('clone-bacon-button');
const validateFormButton = document.getElementById('validate-button');

countBacon();
initialize();
initializeButtonEvents();

function initializeButtonEvents() {
    cloneBaconButton.onclick = invokeCloneBacon;
    validateFormButton.onclick = invokeValidateForm;
}

function invokeCloneBacon() {
    cloneBacon();
}

function invokeValidateForm() {
    validateForm();
}
