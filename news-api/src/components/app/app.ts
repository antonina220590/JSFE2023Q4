import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { assertValues } from '../view/news/assertions';
import { NewsResponseData, SourcesResponceData } from '../view/interfaces';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const appSources = document.querySelector('.sources');
        assertValues(appSources);
        appSources.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: NewsResponseData) => this.view.drawNews(data))
        );
        this.controller.getSources((data: SourcesResponceData) => this.view.drawSources(data));
    }
}

export default App;
