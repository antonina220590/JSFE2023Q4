import { BaseElementCreator } from '../elements-creator';
import { CommonView, CommonParams } from '../view';
import './input.css';
import FormDisplay from './login-form-wrapper/login-form-wrapper';

const styles = {
    FORM_WRAPPER: 'login-form__wrapper',
    TITLE: 'login-form__title',
    FORM: 'login__form',
};

const text = {
    EMPTY: '',
    P: 'LOGIN',
};

export default class InputDisplay extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.FORM_WRAPPER],
            text: text.EMPTY,
        };
        super(params);
        this.inputView();
        this.showChildren();
    }

    inputView(): void {
        const LOGINParams: CommonParams = {
            HTMLtag: 'p',
            classNames: [styles.TITLE],
            text: text.P,
        };
        const loginTitleCreator = new BaseElementCreator(LOGINParams);
        this.elementCreator.appendElement(loginTitleCreator);
    }

    showChildren(): void {
        const formCreator = new FormDisplay();
        this.getHtmlElement().append(formCreator.getHtmlElement());
    }
}
