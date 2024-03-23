import '../header.css';
import { CommonParams, CommonView } from '../../view';

const styles = {
    HEADER_BTNS: 'header__button',
    HEADER_BTN_ACTIVE: 'header__button_active',
};

interface InnerObj {
    pageName: string;
    callback: Function;
}

export default class ButtonView extends CommonView {
    buttonElements: ButtonView[];

    constructor(page: InnerObj, buttonElements: ButtonView[]) {
        const params: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.HEADER_BTNS],
            text: page.pageName,
            callback: null!,
        };
        super(params);
        this.buttonElements = buttonElements;
        this.addAdditonalView(page);
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

    addAdditonalView(page: InnerObj): void {
        this.elementCreator.addTextContent(page.pageName);
        this.elementCreator.addCallback(page.callback);

        this.elementCreator.getElement().addEventListener('click', this.addActiveClass.bind(this));
    }
}
