import '../input.css';
import { CommonParams, CommonView } from '../../view';

const styles = {
    LOGIN: 'login__form_input',
    LOGINNAME: 'login__form__input_name',
    ERROR_BOX: 'error-box',
    ERROR: 'error',
    ERROR_LABEL: 'error-label',
};

const text = {
    EMPTY: '',
    P: 'LOGIN',
    NAME: 'Name',
    SURNAME: 'Surname',
};

export default class InputNameDisplay extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'input',
            classNames: [styles.LOGIN, styles.LOGINNAME],
            text: text.EMPTY,
        };
        super(params);
        this.addAttr();
    }

    addAttr(): HTMLInputElement {
        const inputName = this.elementCreator.getElement() as HTMLInputElement;
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('name', 'logename');
        inputName.setAttribute('data-register', 'name');
        inputName.setAttribute('id', 'logename');
        return inputName;
    }
}
