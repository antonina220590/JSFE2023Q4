import './wrapper.css';
import { CommonParams, CommonView } from '../view';
import InfoView from './info/info';
import InputDisplay from '../input/login-form-wrapper';

const styles = {
    WRAPPERFORM: 'wrapper__info__form',
};

export default class WrapperInfoFormView extends CommonView {
    constructor() {
        const wrapperParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.WRAPPERFORM],
        };
        super(wrapperParams);
        this.showChildren();
    }

    showChildren(): void {
        const infoView = new InfoView();
        this.getHtmlElement().append(infoView.getHtmlElement());

        const inputView = new InputDisplay();
        this.getHtmlElement().append(inputView.getHtmlElement());
    }
}
