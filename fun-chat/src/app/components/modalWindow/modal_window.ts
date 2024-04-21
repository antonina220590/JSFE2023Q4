import './modal_window.css';
import { CommonView, CommonParams } from '../../view/view';
import { BaseElementCreator } from '../../utils/element-creator';

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
    EMPTY: '',
    OK: 'Ok',
};

export default class ModalView extends CommonView {
    constructor() {
        const modalParams: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };
        super(modalParams);
        this.elementCreator.addClasses([styles.MODAL]);
        this.showChildren();
    }

    showChildren(): void {
        const modalParams: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };
        const modalOverlayCreator = new BaseElementCreator(modalParams);
        modalOverlayCreator.addClasses([styles.OVERLAY]);
        modalOverlayCreator.setAttribute('id', 'overlay');

        const modalFormCreator = new BaseElementCreator(modalParams);
        modalFormCreator.setAttribute('id', 'form');
        modalFormCreator.addClasses([styles.MODAL_FORM]);
        modalOverlayCreator.appendElement(modalFormCreator.getElement());

        const modalInsideCreator = new BaseElementCreator(modalParams);
        modalInsideCreator.addClasses([styles.MODAL_INSIDE]);
        modalFormCreator.appendElement(modalInsideCreator.getElement());

        const modalParaParams: CommonParams = {
            HTMLtag: 'p',
            text: text.EMPTY,
            callback: null!,
        };
        const modalParaCreator = new BaseElementCreator(modalParaParams);
        modalParaCreator.addClasses([styles.MODAL_TITLE]);
        modalParaCreator.setAttribute('id', 'serverErr');
        modalInsideCreator.appendElement(modalParaCreator.getElement());

        const modalBtnBoxCreator = new BaseElementCreator(modalParams);
        modalBtnBoxCreator.addClasses([styles.BOX]);
        modalInsideCreator.appendElement(modalBtnBoxCreator.getElement());

        const modalBTNParams: CommonParams = {
            HTMLtag: 'button',
            text: text.OK,
            callback: null!,
        };
        const modalOKCreator = new BaseElementCreator(modalBTNParams);
        modalOKCreator.setAttribute('id', 'okBtn');
        modalOKCreator.addClasses([styles.MODAL_BUTTON, styles.MODAL_BTN]);
        modalBtnBoxCreator.appendElement(modalOKCreator.getElement());

        function closeModal() {
            const overlay = document.getElementById('overlay');
            overlay?.classList.remove('modal__logout_overlay_active');
            const form = document.getElementById('form');
            form?.classList.remove('modal__logout__form_active');
        }

        modalOKCreator.getElement().addEventListener('click', closeModal);
        this.elementCreator.appendElement(modalOverlayCreator.getElement());
    }
}
