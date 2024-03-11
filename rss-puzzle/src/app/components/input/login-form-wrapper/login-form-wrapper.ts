import './login-form-wrapper.css';
import { CommonParams, CommonView } from '../../view';
import LabelNameDisplay from '../label/label-name';
import LabelSurnameDisplay from '../label/label-surname';
import ButtonView from '../../buttons/button';

const styles = {
    FORM: 'login__form',
};

const text = {
    EMPTY: '',
    P: 'LOGIN',
    NAME: 'Name',
    SURNAME: 'Surname',
};
export default class FormDisplay extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'form',
            classNames: [styles.FORM],
            text: text.EMPTY,
        };
        super(params);
        this.setAttr();
        this.showChildren();
    }

    setAttr(): void {
        this.elementCreator.setAttribute('action', '');
        this.elementCreator.setAttribute('id', 'login__form');
    }

    showChildren(): void {
        const labelNameCreator = new LabelNameDisplay();
        this.getHtmlElement().append(labelNameCreator.getHtmlElement());

        const labelSurameCreator = new LabelSurnameDisplay();
        this.getHtmlElement().append(labelSurameCreator.getHtmlElement());

        const buttonCreator = new ButtonView();
        this.getHtmlElement().append(buttonCreator.getHtmlElement());
    }
}
