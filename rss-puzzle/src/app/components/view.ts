import { BaseElementCreator } from './elements-creator';

export interface CommonParams {
    HTMLtag: keyof HTMLElementTagNameMap;
    classNames: string[];
    text?: string;
}
export class CommonView {
    elementCreator: BaseElementCreator<HTMLElement>;

    constructor(params: CommonParams) {
        this.elementCreator = this.createView(params);
    }

    getHtmlElement(): HTMLElement {
        return this.elementCreator.getElement();
    }

    createView(params: CommonParams): BaseElementCreator<HTMLElement> {
        const elementCreatorParams = {
            HTMLtag: params.HTMLtag,
            classNames: params.classNames,
            text: '',
        };
        const elementCreator = new BaseElementCreator(elementCreatorParams);
        return elementCreator;
    }
}
