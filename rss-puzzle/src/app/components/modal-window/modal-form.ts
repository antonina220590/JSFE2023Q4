import './modal.css';
import { CommonView, CommonParams } from '../view';
//
import ModalInsideView from './modal-inside';

const styles = {
    MODAL_FORM: 'modal__logout__form',
    MODAL_FORM_ACTIVE: 'modal__logout__form_active',
};

export default class ModalFormView extends CommonView {
    constructor() {
        const modalFormParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.MODAL_FORM],
        };
        super(modalFormParams);
        this.showChildren();
        this.elementCreator.setAttribute('id', 'form');
    }

    showChildren(): void {
        const modalInsideCreator = new ModalInsideView();
        this.getHtmlElement().append(modalInsideCreator.getHtmlElement());
    }
}
