import './modal.css';
import { CommonView, CommonParams } from '../view';
/* eslint-disable */
import ModalWindowView from './modal-overlay';

const styles = {
    MODAL: 'modal-window',
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
        const modalWindowCreator = new ModalWindowView();
        this.getHtmlElement().append(modalWindowCreator.getHtmlElement());
    }
}
