import './winners_box_wrapper.css';
import { CommonParams, CommonView } from '../../../view';
import { BaseElementCreator } from '../../../../utils/element-creator';

const styles = {
    WRAPPER: 'winners-table_wrapper',
    HEADER: 'table__header',
    TABLEINFO: 'table_info',
    DIV: 'div',
    NUMBER: 'car_number',
    IMAGE: 'car_image',
    NAME: 'car_title',
    WINS: 'car_wins',
    TIME: 'car_time',
};

const text = {
    EMPTY: '',
    NUMBER: '№',
    CAR: 'Car',
    NAME: 'Name',
    WINS: 'Wins',
    TIME: 'Time',
};

export default class WinnersWrapperView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.WRAPPER],
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.elementCreator.setAttribute('id', 'winnersWrapper');
        this.additionalView();
    }

    additionalView() {
        const divParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.DIV],
            text: text.EMPTY,
            callback: null!,
        };
        const mainDivCreator = new BaseElementCreator(divParams);
        mainDivCreator.addClasses([styles.HEADER]);

        const spanParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.DIV],
            text: text.EMPTY,
            callback: null!,
        };
        const spanNumberCreator = new BaseElementCreator(spanParams);
        spanNumberCreator.addClasses([styles.TABLEINFO, styles.NUMBER]);
        spanNumberCreator.addTextContent(text.NUMBER);

        const imageDiv = new BaseElementCreator(divParams);
        const spanImageCreator = new BaseElementCreator(spanParams);
        spanImageCreator.addClasses([styles.TABLEINFO, styles.IMAGE]);
        spanImageCreator.addTextContent(text.CAR);
        imageDiv.getElement().append(spanImageCreator.getElement());

        const nameDiv = new BaseElementCreator(divParams);
        const spanNameCreator = new BaseElementCreator(spanParams);
        spanNameCreator.addClasses([styles.TABLEINFO, styles.NAME]);
        spanNameCreator.addTextContent(text.NAME);
        nameDiv.getElement().append(spanNameCreator.getElement());

        const winsDiv = new BaseElementCreator(divParams);
        const spanWinsCreator = new BaseElementCreator(spanParams);
        spanWinsCreator.addClasses([styles.TABLEINFO, styles.WINS]);
        spanWinsCreator.addTextContent(text.WINS);
        winsDiv.getElement().append(spanWinsCreator.getElement());

        const timeDiv = new BaseElementCreator(divParams);
        const spanTimeCreator = new BaseElementCreator(spanParams);
        spanTimeCreator.addClasses([styles.TABLEINFO, styles.TIME]);
        spanTimeCreator.addTextContent(text.TIME);
        timeDiv.getElement().append(spanTimeCreator.getElement());

        mainDivCreator
            .getElement()
            .append(
                spanNumberCreator.getElement(),
                imageDiv.getElement(),
                nameDiv.getElement(),
                winsDiv.getElement(),
                timeDiv.getElement()
            );
        this.elementCreator.appendElement(mainDivCreator.getElement());
    }
}
