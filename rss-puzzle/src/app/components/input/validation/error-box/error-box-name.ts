import './error-box.css';
import { CommonParams, CommonView } from '../../../view';
import InputNameDisplay from '../../input-field/input-name';
import ErrorLabel from '../error-label';
import assertValues from '../../../../utils/assertion-functions';

const styles = {
    LOGIN: 'login__form_input',
    LOGINNAME: 'login__form__input_name',
    ERROR_BOX: 'error-box',
    ERROR: 'error',
    ERROR_LABEL: 'error-label',
};

export default class ErrorBoxView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.ERROR_BOX],
        };
        super(params);
        this.showChildren();
    }

    showChildren(): void {
        const inputNameCreator = new InputNameDisplay();
        this.getHtmlElement().append(inputNameCreator.getHtmlElement());

        const errorLabelCreator = new ErrorLabel();
        errorLabelCreator.elementCreator.setAttribute('id', 'errorName');
        this.getHtmlElement().append(errorLabelCreator.getHtmlElement());
    }

    addErrorLabel(): boolean {
        const inputName = document.getElementById('logename') as HTMLInputElement;
        const inputNameVal = inputName.value;
        const labelErrorName = document.getElementById('errorName');
        const regExpUpper = /[A-Z][\\-a-zA-z]+$/;
        const test = regExpUpper.test(inputNameVal);
        assertValues(labelErrorName);

        if (inputNameVal.length < 3) {
            labelErrorName.innerText = '';
            setTimeout(() => {
                labelErrorName.innerText = 'Name must contain at least 3 characters';
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
            return true;
        }

        return false;
    }
}
