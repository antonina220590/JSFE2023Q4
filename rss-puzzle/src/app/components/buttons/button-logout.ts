import './buttons.css';
import { CommonParams, CommonView } from '../view';
/* eslint-disable */
import LocalStorage from '../../utils/local-storage';
import LoginWrapperView from '../../../pages/loginpage/loginpage';

const styles = {
    BUTTON: 'button',
    BUTTONLOG: 'button_log-in',
};

const text = {
    EMPTY: '',
    BUTTON: 'LOG OUT',
};
export default class ButtonLogoutView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.BUTTON, styles.BUTTONLOG],
            text: text.BUTTON,
        };
        super(params);
        this.elementCreator.addTextContent('Log Out');
        //this.logout();
    }

    logout(): void {
        //function logOut(): void {
        const overlay = document.getElementById('overlay');
        overlay?.classList.add('modal__logout_overlay_active');
        const form = document.getElementById('form');
        form?.classList.add('modal__logout__form_active');
        console.log(form);
        console.log(overlay);
        //}
        //this.elementCreator.getElement().addEventListener('click', logOut);
    }
}
