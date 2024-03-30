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
        const garageBtn = new ButtonView().getHtmlElement();
        buttonBoxCreator.appendElement(garageBtn);
        garageBtn.textContent = 'Garage';
        garageBtn.setAttribute('id', 'garage_btn');
        const winnersBtn = new ButtonView().getHtmlElement();
        buttonBoxCreator.appendElement(winnersBtn);
        winnersBtn.textContent = 'Winners';
        winnersBtn.setAttribute('id', 'winner_btn');
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
        winnersView.getHtmlElement().classList.add('hidden');
        garageBtn.classList.add('header__button_active');
        myPages.forEach((page) => {
            page.callback();
        });
        function showWinners() {
            garageView.getHtmlElement().classList.add('hidden');
            winnersView.getHtmlElement().classList.remove('hidden');
            garageBtn.classList.remove('header__button_active');
            winnersBtn.setAttribute('disabled', '');
            garageBtn.removeAttribute('disabled');
            winnersBtn.classList.toggle('header__button_active');
        }
        function showGarage() {
            winnersView.getHtmlElement().classList.add('hidden');
            garageView.getHtmlElement().classList.remove('hidden');
            garageBtn.classList.toggle('header__button_active');
            winnersBtn.classList.remove('header__button_active');
            garageBtn.setAttribute('disabled', '');
            winnersBtn.removeAttribute('disabled');
        }
        this.elementCreator.getElement().append(buttonBoxCreator.getElement());
        garageBtn.addEventListener('click', showGarage);
        winnersBtn.addEventListener('click', showWinners);
    }
}
