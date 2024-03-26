import '../../garageview/infobox/infobox.css';
import { CommonParams, CommonView } from '../../../view';
import { BaseElementCreator } from '../../../../utils/element-creator';

const styles = {
    COMMONBOX: 'common-info',
    PAGE: 'current-page',
    ALLCARS: 'all-cars',
    BUTTON_BTNS: 'buttons',
    BUTTON: 'pagination_btn',
    NEXT: 'next',
    PREV: 'prev',
};

const text = {
    EMPTY: '',
    PAGE: 'Page',
    GARAGE: 'Winners',
    PREV: 'Prev',
    NEXT: 'Next',
};

export default class InfoboxView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.COMMONBOX],
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.additionalView();
    }

    additionalView() {
        const spanParams: CommonParams = {
            HTMLtag: 'span',
            classNames: [styles.PAGE],
            text: text.EMPTY,
            callback: null!,
        };
        const pageNumCreator = new BaseElementCreator(spanParams);
        pageNumCreator.setAttribute('id', 'page_num_winners');
        pageNumCreator.addTextContent('Page 1');
        const totalCarsCreator = new BaseElementCreator(spanParams);
        totalCarsCreator.setAttribute('id', 'total_winners');
        totalCarsCreator.addTextContent('Winners');
        const divButtonParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.BUTTON_BTNS],
            text: text.EMPTY,
            callback: null!,
        };
        const btnBoxCreator = new BaseElementCreator(divButtonParams);
        const buttonParams: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.BUTTON],
            text: text.EMPTY,
            callback: null!,
        };
        const buttonPrevCreator = new BaseElementCreator(buttonParams);
        buttonPrevCreator.setAttribute('id', 'prevWinners');
        buttonPrevCreator.addTextContent('Prev');
        const buttonNextCreator = new BaseElementCreator(buttonParams);
        buttonNextCreator.setAttribute('id', 'nextWinners');
        buttonNextCreator.addClasses([styles.NEXT]);
        buttonNextCreator.addTextContent('Next');
        btnBoxCreator.getElement().append(buttonPrevCreator.getElement(), buttonNextCreator.getElement());
        const garage = totalCarsCreator.getElement();
        this.elementCreator.getElement().append(pageNumCreator.getElement(), btnBoxCreator.getElement(), garage);
    }
}
