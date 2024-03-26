import '../header.css';
import { CommonParams, CommonView } from '../../view';

const styles = {
    HEADER_BTNS: 'header__button',
    HEADER_BTN_ACTIVE: 'header__button_active',
};

export default class ButtonView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.HEADER_BTNS],
            text: '',
            callback: null!,
        };
        super(params);
    }

    addActiveClass(): void {
        const button = this.elementCreator;
        button.addClasses([styles.HEADER_BTN_ACTIVE]);
        button.setAttribute('disabled', '');
        button.setAttribute('id', 'current');
    }

    removeActiveClass(): void {
        const button = this.elementCreator;
        button.removeClasses([styles.HEADER_BTN_ACTIVE]);
        button.getElement().removeAttribute('disabled');
    }

    // addAdditonalView(page: InnerObj): void {
    //     this.elementCreator.addTextContent(page.pageName);
    //     this.elementCreator.addCallback(page.callback);

    //     this.elementCreator.getElement().addEventListener('click', this.addActiveClass.bind(this));
    // }
}
