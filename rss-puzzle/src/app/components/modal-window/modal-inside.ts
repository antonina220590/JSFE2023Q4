import './modal.css';
import { CommonView, CommonParams } from '../view';
import { BaseElementCreator } from '../elements-creator';
/* eslint-disable */
import ModalBtnBoxView from './modal-btn-box';

const styles = {
    MODAL_INSIDE: 'modal-window__inside',
    MODAL_TITLE: 'modal-window__title',
};

const text = {
    TITLE: 'Are you sure?',
};

export default class ModalInsideView extends CommonView {
    constructor() {
        const modalInsideParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.MODAL_INSIDE],
        };
        super(modalInsideParams);
        this.modalInsideView();
        this.showChildre();
    }

    modalInsideView(): void {
        const modalParams: CommonParams = {
            HTMLtag: 'p',
            classNames: [styles.MODAL_TITLE],
        };
        const modalCreator = new BaseElementCreator(modalParams);
        modalCreator.addTextContent(text.TITLE);
        this.elementCreator.appendElement(modalCreator);
    }

    showChildre(): void {
        const btnBox = new ModalBtnBoxView();
        this.getHtmlElement().append(btnBox.getHtmlElement());
    }
}
