import './header.css';
import { BaseElementCreator } from '../../utils/element-creator';
import { CommonParams, CommonView } from '../view';
import GarageView from '../main/garageview/garageview';
import WinnersView from '../main/winnersview.ts/winnersview';
import ButtonView from './button/button-header';
import MainView from '../main/main';

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
    callback: Function;
}

const currentPageIndex = 0;

export default class HeaderView extends CommonView {
    buttonElements: ButtonView[];

    constructor(main: MainView) {
        const params: CommonParams = {
            HTMLtag: 'header',
            classNames: [styles.HEADER],
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.buttonElements = [];
        this.additionalLogoView();
        this.additionalView(main);
    }

    additionalLogoView(): void {
        const logoParams: CommonParams = {
            HTMLtag: 'h1',
            classNames: [styles.LOGO],
            text: 'Async Race',
            callback: null!,
        };
        const logoCreator = new BaseElementCreator(logoParams);
        this.elementCreator.getElement().append(logoCreator.getElement());
    }

    additionalView(main: MainView): void {
        const buttonBoxParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.BUTTON_BOX],
            text: text.EMPTY,
            callback: null!,
        };
        const buttonBoxCreator = new BaseElementCreator(buttonBoxParams);

        const garageView = new GarageView();
        const winnersView = new WinnersView();

        const myPages: InnerObj[] = [
            {
                pageName: pages.GARAGE_PAGE,
                callback: () => main.showCurrentPage(garageView),
            },
            {
                pageName: pages.WINNERS_PAGE,
                callback: () => main.showCurrentPage(winnersView),
            },
        ];

        myPages.forEach((page, index) => {
            const buttonElement = new ButtonView(page, this.buttonElements);
            buttonBoxCreator.appendElement(buttonElement.getHtmlElement());

            if (index === currentPageIndex) {
                page.callback();
                buttonElement.addActiveClass();
            }
            this.buttonElements.push(buttonElement);
        });
        this.elementCreator.getElement().append(buttonBoxCreator.getElement());
    }
}
