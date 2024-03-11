import '../input.css';
import { CommonParams, CommonView } from '../../view';
import { BaseElementCreator } from '../../elements-creator';

const styles = {
    LOGIN: 'login__form_input',
    LOGINNAME: 'login__form__input_surname',
    ERROR: 'error-box',
};

const text = {
    EMPTY: '',
    P: 'LOGIN',
    NAME: 'Name',
    SURNAME: 'Surname',
};

export default class InputSurnameDisplay extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.ERROR],
            text: text.EMPTY,
        };
        super(params);
        this.inputView();
    }

    inputView(): void {
        const paramsInputSurname: CommonParams = {
            HTMLtag: 'input',
            classNames: [styles.LOGIN, styles.LOGINNAME],
            text: text.EMPTY,
        };
        const paraInputSurnameCreator = new BaseElementCreator(paramsInputSurname);
        this.elementCreator.appendElement(paraInputSurnameCreator);

        paraInputSurnameCreator.setAttribute('type', 'text');
        paraInputSurnameCreator.setAttribute('name', 'logename');
        paraInputSurnameCreator.setAttribute('data-register', 'name');
        paraInputSurnameCreator.setAttribute('id', 'logsurname');
    }
}
