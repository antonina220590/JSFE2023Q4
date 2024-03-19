import './modal.css';
import { CommonView, CommonParams } from '../view';
//
import ModalFormView from './modal-form';

const styles = {
    OVERLAY: 'modal__logout_overlay',
    OVERLAY_ACTIVE: 'modal__logout_overlay_active',
};

export default class ModalWindowView extends CommonView {
    constructor() {
        const modalParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.OVERLAY],
        };
        super(modalParams);
        this.showChildren();
        this.elementCreator.setAttribute('id', 'overlay');
    }

    showChildren(): void {
        const modalFormCreator = new ModalFormView();
        this.getHtmlElement().append(modalFormCreator.getHtmlElement());
    }
}
