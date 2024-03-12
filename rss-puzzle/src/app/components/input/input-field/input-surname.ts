import '../input.css';
import { CommonParams, CommonView } from '../../view';

const styles = {
    LOGIN: 'login__form_input',
    LOGINNAME: 'login__form__input_surname',
    ERROR: 'error-box',
};

export default class InputSurnameDisplay extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'input',
            classNames: [styles.LOGIN, styles.LOGINNAME],
        };
        super(params);
        this.addAttr();
    }

    addAttr(): HTMLInputElement {
        const inputName = this.elementCreator.getElement() as HTMLInputElement;
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('name', 'logsurname');
        inputName.setAttribute('data-register', 'name');
        inputName.setAttribute('id', 'logsurname');
        return inputName;
    }
}
