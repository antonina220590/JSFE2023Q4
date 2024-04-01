import '../style.css';
import HeaderView from './components/view/header/header';
import MainView from './components/view/main/main';
import FooterView from './components/view/footer/footer';
import { getAllcars, changePage } from './api_interaction/api_garage/api_garage';
import { getAllWinners, changePageWinners } from './api_interaction/api_winners/api_winners';

export default class App {
    constructor() {
        this.createView();
    }

    createView(): void {
        const mainView = new MainView();
        const headerView = new HeaderView(mainView);
        const footerView = new FooterView();

        document.body.append(headerView.getHtmlElement(), mainView.getHtmlElement(), footerView.getHtmlElement());
    }

    showGarage() {
        const buttonNext = document.getElementById('next');
        const buttonPrev = document.getElementById('prev');

        getAllcars([
            { key: '_page', value: 1 },
            { key: '_limit', value: 7 },
        ]);
        buttonNext?.addEventListener('click', changePage);
        buttonPrev?.addEventListener('click', changePage);
    }

    showWinners() {
        const buttonNext = document.getElementById('nextWinners');
        const buttonPrev = document.getElementById('prevWinners');

        getAllWinners([
            { key: '_page', value: 1 },
            { key: '_limit', value: 7 },
        ]);
        buttonNext?.addEventListener('click', changePageWinners);
        buttonPrev?.addEventListener('click', changePageWinners);
    }
}
