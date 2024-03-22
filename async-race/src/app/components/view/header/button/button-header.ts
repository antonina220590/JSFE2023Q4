import '../header.css';
import { CommonParams, CommonView } from '../../view';

const styles = {
    HEADER_BTNS: 'header__button',
    HEADER_BTN_ACTIVE: 'header__button_active',
};

export default class ButtonView extends CommonView {
    buttonElements: ButtonView[];

    constructor(name: string, buttonElements: ButtonView[]) {
        const params: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.HEADER_BTNS],
            text: name,
        };
        super(params);
        this.buttonElements = buttonElements;
        this.addAdditonalView();
    }

    addActiveClass(): void {
        this.buttonElements.forEach((buttonElement) => buttonElement.removeActiveClass());
        const button = this.elementCreator;
        button.addClasses([styles.HEADER_BTN_ACTIVE]);
        button.setAttribute('disabled', '');
    }

    removeActiveClass(): void {
        const button = this.elementCreator;
        button.removeClasses([styles.HEADER_BTN_ACTIVE]);
        button.getElement().removeAttribute('disabled');
    }

    addAdditonalView(): void {
        this.elementCreator.getElement().addEventListener('click', this.addActiveClass.bind(this));
    }
}
