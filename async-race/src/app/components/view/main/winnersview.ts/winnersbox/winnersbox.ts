import './winnersbox.css';
import { CommonParams, CommonView } from '../../../view';
import { BaseElementCreator } from '../../../../utils/element-creator';

const styles = {
    COMMONWRAPPER: 'common_wrapper',
    WRAPPER: 'winners_info__wrapper',
    WINNERSDIV: 'winners_div',
    WINNERSDIV_IMG: 'car_img',
    WINNERSDIV_TITLE: 'car_name',
    WINNERSDIV_WINS: 'car_win',
    WINNERSDIV_TIME: 'car_time',
    WINNERSSPAN: 'winner_data',
    WINNERSSPAN_NAME: 'winner_title',
    WINNERSPAN_WINS: 'winner_win',
    WINNERSPAN_TIME: 'winner_time',
    WINNERSPAN_NUM: 'winners_number',
};

const text = {
    EMPTY: '',
    NUMBER: '1',
    NAME: 'Tesla',
    WINS: '1',
    TIME: '10s',
};

export default class WinnerBoxView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.COMMONWRAPPER],
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.elementCreator.setAttribute('id', 'winnersWrapper');
        this.additionalView();
    }

    additionalView() {
        const infoDivparams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.WRAPPER],
            text: text.EMPTY,
            callback: null!,
        };
        const infoDivparamsCreator = new BaseElementCreator(infoDivparams);

        const divParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.WINNERSDIV],
            text: text.EMPTY,
            callback: null!,
        };
        const spanParams: CommonParams = {
            HTMLtag: 'span',
            classNames: [styles.WINNERSSPAN],
            text: text.EMPTY,
            callback: null!,
        };

        const numberSpanCreator = new BaseElementCreator(spanParams);
        numberSpanCreator.addClasses([styles.WINNERSPAN_NUM]);
        numberSpanCreator.addTextContent(text.NUMBER);

        const svgDivCreator = new BaseElementCreator(divParams);
        svgDivCreator.addClasses([styles.WINNERSDIV_IMG]);
        const svgcar = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgcar.classList.add('winner_car');
        const useSvg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './images/car.svg#hatchback');
        svgcar.append(useSvg);
        svgcar.style.fill = '#000';
        svgDivCreator.getElement().append(svgcar);

        const divNameCreator = new BaseElementCreator(divParams);
        divNameCreator.addClasses([styles.WINNERSDIV_TITLE]);

        const nameSpanCreator = new BaseElementCreator(spanParams);
        nameSpanCreator.addClasses([styles.WINNERSSPAN_NAME]);
        nameSpanCreator.addTextContent(text.NAME);
        divNameCreator.appendElement(nameSpanCreator.getElement());

        const divWinsCreator = new BaseElementCreator(divParams);
        divWinsCreator.addClasses([styles.WINNERSDIV_WINS]);

        const winsSpanCreator = new BaseElementCreator(spanParams);
        winsSpanCreator.addClasses([styles.WINNERSPAN_WINS]);
        winsSpanCreator.addTextContent(text.WINS);
        divWinsCreator.appendElement(winsSpanCreator.getElement());

        const divTimeCreator = new BaseElementCreator(divParams);
        divTimeCreator.addClasses([styles.WINNERSDIV_TIME]);

        const timeSpanCreator = new BaseElementCreator(spanParams);
        timeSpanCreator.addClasses([styles.WINNERSPAN_TIME]);
        timeSpanCreator.addTextContent(text.TIME);
        divTimeCreator.appendElement(timeSpanCreator.getElement());

        infoDivparamsCreator
            .getElement()
            .append(
                numberSpanCreator.getElement(),
                svgDivCreator.getElement(),
                divNameCreator.getElement(),
                divWinsCreator.getElement(),
                divTimeCreator.getElement()
            );

        this.elementCreator.appendElement(infoDivparamsCreator);
    }
}
