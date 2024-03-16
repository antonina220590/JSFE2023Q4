import './startpage.css';
import { CommonParams, CommonView } from '../../app/components/view';
/* eslint-disable */
import ButtonLogoutView from '../../app/components/buttons/button-logout';
import ModalView from '../../app/components/modal-window/modal';

const styles = {
    STARTWRAPPER: 'start-page__wrapper',
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
        const logoutBtn = new ButtonLogoutView();
        const modalView = new ModalView();
        this.getHtmlElement().append(logoutBtn.getHtmlElement(), modalView.getHtmlElement());

        function logOutPlease(): void {
            logoutBtn.logout();
        }
        logoutBtn.getHtmlElement().addEventListener('click', logOutPlease);
    }
}
