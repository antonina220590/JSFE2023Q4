import './header.css';
import { BaseElementCreator } from '../../utils/element-creator';
import { CommonParams, CommonView } from '../view';
import ButtonView from './button/button-header';

const styles = {
    HEADER: 'header',
    LOGO: 'logo',
    BUTTON_BOX: 'button-box',
    HEADER_BTN_ACTIVE: 'header__button_active',
};

const text = {
    GAMENAME: 'Async Race',
    EMPTY: '',
    GARAGE_BTN: 'Garage',
    WINNERS_BTN: 'Winners',
};

const pages = {
    GARAGE_PAGE: 'Garage',
    WINNERS_PAGE: 'Winners',
};

interface InnerObj {
    pageName: string;
}

const currentPageIndex = 0;

export default class HeaderView extends CommonView {
    buttonElements: ButtonView[];

    constructor() {
        const params: CommonParams = {
            HTMLtag: 'header',
            classNames: [styles.HEADER],
            text: text.EMPTY,
        };
        super(params);
        this.buttonElements = [];
        this.additionalLogoView();
        this.additionalView();
    }

    additionalLogoView(): void {
        const logoParams: CommonParams = {
            HTMLtag: 'h1',
            classNames: [styles.LOGO],
            text: 'Async Race',
        };
        const logoCreator = new BaseElementCreator(logoParams);
        this.elementCreator.getElement().append(logoCreator.getElement());
    }

    additionalView(): void {
        const buttonBoxParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.BUTTON_BOX],
            text: text.EMPTY,
        };
        const buttonBoxCreator = new BaseElementCreator(buttonBoxParams);
        this.elementCreator.getElement().append(buttonBoxCreator.getElement());

        const myPages: InnerObj[] = [
            {
                pageName: pages.GARAGE_PAGE,
            },
            {
                pageName: pages.WINNERS_PAGE,
            },
        ];

        myPages.forEach((page, index) => {
            const buttonElement = new ButtonView(page.pageName, this.buttonElements);
            buttonBoxCreator.appendElement(buttonElement.getHtmlElement());

            if (index === currentPageIndex) {
                buttonElement.addActiveClass();
            }
            this.buttonElements.push(buttonElement);
        });
    }
}
