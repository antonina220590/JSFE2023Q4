import './startpage.css';
import { CommonParams, CommonView } from '../../app/components/view';
import ButtonLogoutView from '../../app/components/buttons/button-logout';
//
import ModalView from '../../app/components/modal-window/modal';
import FormWrapperView from '../../app/components/wrapper/wrapper-info-form';
import InfoView from '../../app/components/wrapper/info/info';
import LocalStorage from '../../app/utils/local-storage';
import ButtonStartView from '../../app/components/buttons/button-start';
import GametView from '../gamepage/gamepage';
import { changePosition } from '../../app/utils/getData';

const styles = {
    STARTWRAPPER: 'start-page__wrapper',
    FORMWRAP: 'wrapper__info__form',
    FORMWRAP1: 'wrapper__info__form1',
    H3: '',
};

export default class StartView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.STARTWRAPPER],
        };
        super(params);
        this.elementCreator.setAttribute('id', 'start');
        this.showChildren();
    }

    showChildren(): void {
        const gameTitle = new InfoView().descriptionView();
        this.getHtmlElement().append(gameTitle);
        const logoutBtn = new ButtonLogoutView();
        const startBtn = new ButtonStartView().getHtmlElement();

        const modalView = new ModalView();
        this.getHtmlElement().append(modalView.getHtmlElement());

        function logOut(): void {
            logoutBtn.logout();
        }
        logoutBtn.getHtmlElement().addEventListener('click', logOut);
        const storage = new LocalStorage().getValues('userAT');
        const formWrapper = new FormWrapperView();
        this.getHtmlElement().append(formWrapper.getHtmlElement());
        const welcomeText = new InfoView().h3View();
        welcomeText.textContent = `Dear ${storage[0]} ${storage[1]}, welcome to the game`;
        const descriptionText = new InfoView().pView();
        descriptionText.textContent =
            'Our game is an amazing opportunity to improve your English and plunge into the world of Art. Click on words, collect phrases. Words can be drag and drop. Select tooltips in the menu.';
        const btnBox = new InfoView().divView();
        btnBox.append(logoutBtn.getHtmlElement(), startBtn);

        formWrapper.getHtmlElement().append(welcomeText, descriptionText, btnBox);
        function goPlay(): void {
            document.body.innerHTML = '';
            const game = new GametView();
            document.body.append(game.getHtmlElement());
            const box = document.getElementById('source');
            box?.addEventListener('click', changePosition);
            const line = document.querySelector('.line1');
            line?.addEventListener('click', changePosition);
        }
        startBtn.addEventListener('click', goPlay);
    }
}
