import './modal.css';
import { CommonView, CommonParams } from '../view';
import { BaseElementCreator } from '../elements-creator';
import LocalStorage from '../../utils/local-storage';
import LoginWrapperView from '../../../pages/loginpage/loginpage';

const styles = {
    MODAL: 'modal-window',
    OVERLAY: 'modal__logout_overlay',
    OVERLAY_ACTIVE: 'modal__logout_overlay_active',
    MODAL_FORM: 'modal__logout__form',
    MODAL_FORM_ACTIVE: 'modal__logout__form_active',
    MODAL_INSIDE: 'modal-window__inside',
    MODAL_TITLE: 'modal-window__title',
    BOX: 'modal-window__btns-box',
    MODAL_BUTTON: 'button_log-in',
    MODAL_BTN: 'modal_btn',
};

const text = {
    TITLE: 'Are you sure?',
    YES: 'Yes',
    NO: 'No',
};
export default class ModalView extends CommonView {
    constructor() {
        const modalParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.MODAL],
        };
        super(modalParams);
        this.showChildren();
    }

    showChildren(): void {
        const modalParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.OVERLAY],
        };
        const modalOverlayCreator = new BaseElementCreator(modalParams);
        modalOverlayCreator.setAttribute('id', 'overlay');

        const modalFormParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.MODAL_FORM],
        };

        const modalFormCreator = new BaseElementCreator(modalFormParams);
        modalFormCreator.setAttribute('id', 'form');
        modalOverlayCreator.appendElement(modalFormCreator.getElement());

        const modalInsideParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.MODAL_INSIDE],
        };

        const modalInsideCreator = new BaseElementCreator(modalInsideParams);
        modalFormCreator.appendElement(modalInsideCreator.getElement());

        const modalParaParams: CommonParams = {
            HTMLtag: 'p',
            classNames: [styles.MODAL_TITLE],
        };
        const modalParaCreator = new BaseElementCreator(modalParaParams);
        modalParaCreator.addTextContent(text.TITLE);
        modalInsideCreator.appendElement(modalParaCreator.getElement());

        const modalBtnBoxParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.BOX],
        };

        const modalBtnBoxCreator = new BaseElementCreator(modalBtnBoxParams);
        modalInsideCreator.appendElement(modalBtnBoxCreator.getElement());

        const modalBTNParams: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.MODAL_BUTTON, styles.MODAL_BTN],
        };
        const modalBTNYesCreator = new BaseElementCreator(modalBTNParams);
        modalBTNYesCreator.setAttribute('id', 'yesBtn');
        modalBTNYesCreator.addTextContent(text.YES);
        modalBtnBoxCreator.appendElement(modalBTNYesCreator.getElement());

        function logOut(): void {
            new LocalStorage().clearAll();
            const login = new LoginWrapperView();
            document.body.innerHTML = '';
            document.body.append(login.getHtmlElement());
            window.location.href = 'http://localhost:8080/';
        }

        modalBTNYesCreator.getElement().addEventListener('click', logOut);

        const modalBTNNoCreator = new BaseElementCreator(modalBTNParams);
        modalBTNNoCreator.setAttribute('id', 'noBtn');
        modalBTNNoCreator.addTextContent(text.NO);

        modalBtnBoxCreator.appendElement(modalBTNNoCreator.getElement());

        function closeModal() {
            const overlay = document.getElementById('overlay');
            overlay?.classList.remove('modal__logout_overlay_active');
            const form = document.getElementById('form');
            form?.classList.remove('modal__logout__form_active');
        }

        modalBTNNoCreator.getElement().addEventListener('click', closeModal);

        this.elementCreator.appendElement(modalOverlayCreator.getElement());
    }
}
