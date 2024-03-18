import './modal.css';
import { CommonView, CommonParams } from '../view';
import { BaseElementCreator } from '../elements-creator';
import LocalStorage from '../../utils/local-storage';
//
import LoginWrapperView from '../../../pages/loginpage/loginpage';

const styles = {
    BOX: 'modal-window__btns-box',
    MODAL_BUTTON: 'button_log-in',
    MODAL_BTN: 'modal_btn',
};

const text = {
    YES: 'Yes',
    NO: 'No',
};

export default class ModalBtnBoxView extends CommonView {
    constructor() {
        const ModalBtnBoxParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.BOX],
        };
        super(ModalBtnBoxParams);
        this.modalBtnBoxView();
    }

    modalBtnBoxView(): void {
        const modalBTNParams: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.MODAL_BUTTON, styles.MODAL_BTN],
        };
        const modalBTNYesCreator = new BaseElementCreator(modalBTNParams);
        modalBTNYesCreator.addTextContent(text.YES);
        this.elementCreator.appendElement(modalBTNYesCreator);

        function logOut(): void {
            new LocalStorage().clearAll();
            const login = new LoginWrapperView();
            document.body.innerHTML = '';
            document.body.append(login.getHtmlElement());
            window.location.href = 'http://localhost:8080/';
        }

        modalBTNYesCreator.getElement().addEventListener('click', logOut);

        const modalBTNNoCreator = new BaseElementCreator(modalBTNParams);
        modalBTNNoCreator.addTextContent(text.NO);
        this.elementCreator.appendElement(modalBTNNoCreator);

        function closeModal() {
            const overlay = document.getElementById('overlay');
            overlay?.classList.remove('modal__logout_overlay_active');
            const form = document.getElementById('form');
            form?.classList.remove('modal__logout__form_active');
            console.log(form);
            console.log(overlay);
        }

        modalBTNNoCreator.getElement().addEventListener('click', closeModal);
    }
}
