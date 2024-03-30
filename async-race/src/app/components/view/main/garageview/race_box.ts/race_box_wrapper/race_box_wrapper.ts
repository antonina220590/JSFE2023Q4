import './race_box_wrapper.css';
import { CommonParams, CommonView } from '../../../../view';
import CarRaceView from '../racebox';
import { CarParams, generateString, Params, path } from '../../../../../../api_interaction/api_garage/api_garage';

const styles = {
    WRAPPER: 'wrapper',
};

const text = {
    EMPTY: '',
};
export default class CarRaceWrapperView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.WRAPPER],
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.showChildren();
    }

    showChildren() {
        const getAllcars = async (params: Params[]) => {
            const baseUrl: string = 'http://127.0.0.1:3000';
            const response = await fetch(`${baseUrl}${path.garage}${generateString(params)}`);
            const data: CarParams[] = await response.json();
            console.log(data);
            const totalNumber = Number(response.headers.get('X-Total-Count'));
            for (let i = 0; i < totalNumber; i += 1) {
                const carRace = new CarRaceView();
                this.elementCreator.getElement().append(carRace.getHtmlElement());
            }
        };
        getAllcars([
            { key: '_page', value: 1 },
            { key: '_limit', value: 7 },
        ]);
    }
}
