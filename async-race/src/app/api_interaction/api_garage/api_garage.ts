import assertValues from '../../components/utils/assertion_function';

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

let data: CarParams[] = [];

function getCarInfo(data: CarParams[]) {
    const colors: string[] = [];
    const marks: string[] = [];
    const ids: number[] = [];
    data.forEach((car) => {
        colors.push(car.color);
        marks.push(car.name);
        ids.push(car.id);
    });
    const carName = document.getElementsByClassName('car-name');
    for (let i = 0; i < carName.length; i += 1) {
        for (let j = 0; j < marks.length; j += 1) {
            carName[i].textContent = marks[i];
            console.log(marks[i]);
        }
    }
    const carArray = Array.from(document.getElementsByClassName('car'));
    for (let i = 0; i < carArray.length; i += 1) {
        for (let j = 0; j < colors.length; j += 1) {
            const result = carArray[i] as HTMLElement;
            result.style.fill = colors[i];
        }
    }

    const wrapperArray = Array.from(document.getElementsByClassName('car-control__wrapper'));
    for (let i = 0; i < wrapperArray.length; i += 1) {
        for (let j = 0; j < ids.length; j += 1) {
            const resultWrapper = wrapperArray[i] as HTMLElement;
            resultWrapper.setAttribute('id', `${ids[i]}`);
        }
    }
}

export const deleteCar = (event: Event) => {
    const clicked = event.target as HTMLElement;
    const parent = clicked.closest('.car-control__wrapper');
    let parentId = Number(parent?.id);
    parent?.remove();
    const wrapperArray = Array.from(document.getElementsByClassName('car-control__wrapper'));
    console.log(wrapperArray);
    const index = data.findIndex(n => n.id === parentId);
    if (index !== -1) {
     data.splice(index, 1);
    }
    console.log(data)
};


let totalNumber: number = 0;
export const generateString = (params: Params[] = []) =>
    params.length ? `?${params.map((x) => `${x.key}=${x.value}`).join('&')}` : '';

export const getAllcars = async (params: Params[]) => {
    const baseUrl: string = 'http://127.0.0.1:3000';
    const response = await fetch(`${baseUrl}${path.garage}${generateString(params)}`);
    data = await response.json();
    totalNumber = Number(response.headers.get('X-Total-Count'));
    const garage = document.getElementById('total_cars');
    assertValues(garage);
    garage.innerHTML = `Garage(${totalNumber})`;
    getCarInfo(data);

    if (totalNumber < 7) {
        document.getElementById('next')?.setAttribute('disabled', '');
    } else {
        document.getElementById('next')?.removeAttribute('disabled');
    }
};

let count = 1;
export const changePage = (event: Event) => {
    const clicked = event.target as HTMLElement;
    if (clicked.classList.contains('next')) {
        count += 1;
        document.getElementById('prev')?.removeAttribute('disabled');
    } else {
        count -= 1;
        if (count === 1) {
            document.getElementById('prev')?.setAttribute('disabled', '');
        }
    }

    const page = document.getElementById('page_num');
    assertValues(page);
    page.textContent = `Page ${count}`;
    getAllcars([
        { key: '_page', value: `${count}` },
        { key: '_limit', value: 7 },
    ]);
};
