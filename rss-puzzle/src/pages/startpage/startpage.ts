import './startpage.css';
import { CommonParams, CommonView } from '../../app/components/view';
/* eslint-disable */
import ButtonLogoutView from '../../app/components/buttons/button-logout';
import ModalView from '../../app/components/modal-window/modal';
import FormWrapperView from '../../app/components/wrapper/wrapper-info-form';
import InfoView from '../../app/components/wrapper/info/info';

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
        const modalView = new ModalView();
        this.getHtmlElement().append(modalView.getHtmlElement());

        function logOutPlease(): void {
            logoutBtn.logout();
        }
        logoutBtn.getHtmlElement().addEventListener('click', logOutPlease);

        const formWrapper = new FormWrapperView();
        this.getHtmlElement().append(formWrapper.getHtmlElement());
        const welcomeText = new InfoView().h3View();
        welcomeText.textContent = 'welcome to the game';
        const descriptionText = new InfoView().pView();
        descriptionText.textContent =
            'Our game is an amazing opportunity to improve your English and plunge into the world of Art. Click on words, collect phrases. Words can be drag and drop. Select tooltips in the menu.';
        const btnBox = new InfoView().divView();
        btnBox.append(logoutBtn.getHtmlElement());

        formWrapper.getHtmlElement().append(welcomeText, descriptionText, btnBox);
    }
}
