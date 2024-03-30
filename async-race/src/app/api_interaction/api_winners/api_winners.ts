import assertValues from '../../components/utils/assertion_function';

const path = {
    winners: '/winners',
};

interface Params {
    key: string;
    value: number | string;
}

const generateString = (params: Params[] = []) =>
    params.length ? `?${params.map((x) => `${x.key}=${x.value}`).join('&')}` : '';

export const getAllWinners = async (params: Params[]) => {
    const baseUrl: string = 'http://127.0.0.1:3000';
    const response = await fetch(`${baseUrl}${path.winners}${generateString(params)}`);
    const totalNumber = response.headers.get('X-Total-Count');

    const winners = document.getElementById('total_winners');
    assertValues(winners);
    winners.innerHTML = `Winners(${totalNumber})`;
};

let count = 1;

export function changePageWinners(event: Event) {
    const clicked = event.target as HTMLElement;
    if (clicked.classList.contains('next')) {
        count += 1;
        document.getElementById('prevWinners')?.removeAttribute('disabled');
    } else {
        count -= 1;
        if (count === 1) {
            document.getElementById('prevWinners')?.setAttribute('disabled', '');
        }
    }
    const page = document.getElementById('page_num_winners');
    assertValues(page);
    page.textContent = `Page ${count}`;
    getAllWinners([
        { key: '_page', value: `${count}` },
        { key: '_limit', value: 7 },
    ]);
}
