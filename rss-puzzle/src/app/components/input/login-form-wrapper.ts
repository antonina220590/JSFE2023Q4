import './input.css';
import { BaseElementCreator } from '../elements-creator';
import { CommonView, CommonParams } from '../view';
//
import FormDisplay from './login-form/login-form';

const styles = {
    FORM_WRAPPER: 'login-form__wrapper',
    TITLE: 'login-form__title',
};

const text = {
    EMPTY: '',
    P: 'LOGIN',
};

export default class LoginFormWrapperView extends CommonView {
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
        };
        const loginTitleCreator = new BaseElementCreator(LOGINParams);
        loginTitleCreator.addTextContent(text.P);
        this.elementCreator.appendElement(loginTitleCreator);
    }

    showChildren(): void {
        const formCreator = new FormDisplay();
        this.getHtmlElement().append(formCreator.getHtmlElement());
    }
}
