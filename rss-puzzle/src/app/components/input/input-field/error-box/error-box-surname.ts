import './error-box.css';
import { CommonParams, CommonView } from '../../../view';
import InputSurnameDisplay from '../input-surname';
import ErrorLabel from '../../validation/error-label';
import assertValues from '../../../../utils/assertion-functions';

const styles = {
    LOGIN: 'login__form_input',
    LOGINNAME: 'login__form__input_name',
    ERROR_BOX: 'error-box',
    ERROR: 'error',
    ERROR_LABEL: 'error-label',
};

export default class ErrorBoxViewSurname extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.ERROR_BOX],
        };
        super(params);
        this.showChildren();
    }

    showChildren(): void {
        const inputSurnameCreator = new InputSurnameDisplay();
        this.getHtmlElement().append(inputSurnameCreator.getHtmlElement());

        const errorLabelCreator = new ErrorLabel();
        errorLabelCreator.elementCreator.setAttribute('id', 'errorSurname');
        this.getHtmlElement().append(errorLabelCreator.getHtmlElement());
    }

    addErrorLabel(): void {
        const inputName = document.getElementById('logsurname') as HTMLInputElement;
        const inputNameVal = inputName.value;
        const labelErrorName = document.getElementById('errorSurname');
        console.log(labelErrorName);
        const regExpUpper = /[A-Z][\\-a-zA-z]+$/;
        const test = regExpUpper.test(inputNameVal);
        assertValues(labelErrorName);

        if (inputNameVal.length < 4) {
            console.log('!!!');
            labelErrorName.innerText = '';
            setTimeout(() => {
                labelErrorName.innerText = 'Surname must contain at least 4 characters';
            }, 100);
            inputName.classList.add('error');
        } else if (test === false) {
            labelErrorName.innerText = '';
            setTimeout(() => {
                labelErrorName.innerText = 'Invalid symbols / First letter is capital';
            }, 100);
            inputName.classList.add('error');
        } else {
            inputName.classList.remove('error');
            labelErrorName.innerText = '';
        }
    }
}
