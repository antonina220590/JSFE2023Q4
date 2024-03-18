import './loginpage.css';
import { CommonParams, CommonView } from '../../app/components/view';
//
import FormWrapperView from '../../app/components/wrapper/wrapper-info-form';
import InputDisplay from '../../app/components/input/login-form-wrapper';

const styles = {
    WRAPPER: 'wrapper__login-page',
};
export default class LoginWrapperView extends CommonView {
    constructor() {
        const wrapperParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.WRAPPER],
        };
        super(wrapperParams);
        this.showChildren();
    }

    showChildren(): void {
        const formWrapper = new FormWrapperView();
        this.getHtmlElement().append(formWrapper.getHtmlElement());
        const inputView = new InputDisplay();
        formWrapper.elementCreator.appendElement(inputView.getHtmlElement());
    }
}
