import '../input.css';
import { CommonParams, CommonView } from '../../view';
import { BaseElementCreator } from '../../elements-creator';

const styles = {
    LOGIN: 'login__form_input',
    LOGINNAME: 'login__form__input_name',
    ERROR: 'error-box',
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
            HTMLtag: 'div',
            classNames: [styles.ERROR],
            text: text.EMPTY,
        };
        super(params);
        this.inputView();
    }

    inputView(): void {
        const paramsInputName: CommonParams = {
            HTMLtag: 'input',
            classNames: [styles.LOGIN, styles.LOGINNAME],
            text: text.EMPTY,
        };
        const paraInputNameCreator = new BaseElementCreator(paramsInputName);
        this.elementCreator.appendElement(paraInputNameCreator);

        paraInputNameCreator.setAttribute('type', 'text');
        paraInputNameCreator.setAttribute('name', 'logename');
        paraInputNameCreator.setAttribute('data-register', 'name');
        paraInputNameCreator.setAttribute('id', 'logename');
    }
}
