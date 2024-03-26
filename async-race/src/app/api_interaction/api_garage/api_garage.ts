import assertValues from '../../components/utils/assertion_function';

const path = {
    garage: '/garage',
    winners: '/winners',
};

interface Params {
    key: string;
    value: number | string;
}

const generateString = (params: Params[] = []) =>
    params.length ? `?${params.map((x) => `${x.key}=${x.value}`).join('&')}` : '';

export const getAllcars = async (params: Params[]) => {
    const baseUrl: string = 'http://127.0.0.1:3000';
    const response = await fetch(`${baseUrl}${path.garage}${generateString(params)}`);
    const data = await response.json();
    const totalNumber = response.headers.get('X-Total-Count');

    // const winners = document.getElementById('total_winners');
    //  assertValues(winners);
    //  winners.innerHTML = `Winners(${totalNumber})`;
    //  console.log(winners);
    // console.log(data);

    const garage = document.getElementById('total_cars');
    assertValues(garage);
    garage.innerHTML = `Garage(${totalNumber})`;
    console.log(garage);
    console.log(data);
};

let count = 1;

export function changePage(event: Event) {
    const clicked = event.target as HTMLElement;
    if (clicked.classList.contains('next')) {
        count += 1;
        document.getElementById('prev')?.removeAttribute('disabled');
        console.log(count);
    } else {
        count -= 1;
        if (count === 1) {
            document.getElementById('prev')?.setAttribute('disabled', '');
        }
        console.log(count);
    }
    const page = document.getElementById('page_num');
    assertValues(page);
    page.textContent = `Page ${count}`;
    getAllcars([
        { key: '_page', value: `${count}` },
        { key: '_limit', value: 7 },
    ]);
}
