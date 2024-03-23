import './footer.css';
import { CommonParams, CommonView } from '../view';
import { BaseElementCreator } from '../../utils/element-creator';

const styles = {
    FOOTER: 'footer',
    FOOTER_TEXT: 'year',
};

const text = {
    EMPTY: '',
    FOOTER_TEXT: '2024',
};

export default class FooterView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'footer',
            classNames: [styles.FOOTER],
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.additionalView();
    }

    additionalView() {
        const params: CommonParams = {
            HTMLtag: 'p',
            classNames: [styles.FOOTER_TEXT],
            text: text.FOOTER_TEXT,
            callback: null!,
        };
        const paraCreator = new BaseElementCreator(params);
        this.elementCreator.getElement().append(paraCreator.getElement());
    }
}
