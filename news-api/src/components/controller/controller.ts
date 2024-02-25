import AppLoader from './appLoader';
import { CallbackGen } from '../view/interfaces';
import { assertValues } from '../view/news/assertions';

class AppController extends AppLoader {
    public getSources<T>(callback: CallbackGen<T>): void {
        super.getResp(
            {
                endpoint: 'sources',
                options: {},
            },
            callback
        );
    }

    public getNews<T>(e: Event, callback: CallbackGen<T>): void {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;
        while (target !== newsContainer) {
            if (!(target instanceof HTMLElement && newsContainer instanceof HTMLElement)) {
                throw new Error('Error!');
            } else {
                if (target.classList.contains('source__item')) {
                    const sourceId: string | null = target.getAttribute('data-source-id');
                    assertValues(sourceId);

                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);

                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
