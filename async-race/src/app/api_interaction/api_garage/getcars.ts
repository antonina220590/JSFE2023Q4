import assertValues from '../../components/utils/assertion_function';
import { getCarInfo } from './api_garage';

export const path = {
    garage: '/garage',
    car: './garage/:id',
    winners: '/winners',
    engine: '/engine',
    winners_id: '/winners/:id',
};

export interface Params {
    key: string;
    value: number | string;
}

export interface CarParams {
    name: string;
    color: string;
    id: number;
}

const baseUrl: string = 'http://127.0.0.1:3000';
export const generateString = (params: Params[] = []) =>
    params.length ? `?${params.map((x) => `${x.key}=${x.value}`).join('&')}` : '';
export const getAllcars = async (params: Params[]) => {
    const response = await fetch(`${baseUrl}${path.garage}${generateString(params)}`);
    const data = await response.json();
    const totalNumber = Number(response.headers.get('X-Total-Count'));
    const garage = document.getElementById('total_cars');
    assertValues(garage);
    garage.innerHTML = `Garage(${totalNumber})`;
    getCarInfo(data);
    if (totalNumber <= 7) {
        document.getElementById('next')?.setAttribute('disabled', '');
    }
};
