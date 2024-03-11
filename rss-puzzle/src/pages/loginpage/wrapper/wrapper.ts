import { CommonParams, CommonView } from '../../../app/components/view';
import './wrapper.css';
import InfoView from './info/info';
import InputDisplay from '../../../app/components/input/input';

const styles = {
    WRAPPER: 'wrapper',
};

const text = {
    EMPTY: '',
};

export default class WrapperView extends CommonView {
    constructor() {
        const wrapperParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.WRAPPER],
            text: text.EMPTY,
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
