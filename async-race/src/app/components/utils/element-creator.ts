export interface Element {
    HTMLtag?: keyof HTMLElementTagNameMap;
}

export interface FullElementDescription extends Element {
    classNames: string[];
    parent?: HTMLElement;
    text: string;
    callback?: Function;
}

export type CallbackGen<T> = (data: T) => void;

export class BaseElementCreator<T extends HTMLElement = HTMLElement> {
    protected element: T;

    constructor(node: FullElementDescription) {
        const element = document.createElement(node.HTMLtag ?? 'div') as T;
        this.element = element;
        this.createNewElement(node);
    }

    public createNewElement(node: FullElementDescription): void {
        this.element = document.createElement(node.HTMLtag ?? 'div') as T;
        this.addClasses(node.classNames);
        this.toggleClasses(node.classNames);
        this.removeClasses(node.classNames);
        this.addTextContent(node.text);
        if (typeof node.callback !== 'undefined' && typeof node.callback !== null) {
            this.addCallback(node.callback);
        }
    }

    public addClasses(classNames: string[]): void {
        classNames.forEach((className) => {
            this.element.classList.add(className);
        });
    }

    public toggleClasses(classNames: string[]): void {
        classNames.forEach((className) => {
            this.element.classList.toggle(className);
        });
    }

    public removeClasses(classNames: string[]): void {
        classNames.forEach((className) => {
            this.element.classList.toggle(className);
        });
    }

    public addTextContent(text: string): void {
        this.element.textContent = text;
    }

    public appendElement(element: HTMLElement | BaseElementCreator): void {
        if (element instanceof BaseElementCreator) {
            this.element.append(element.getElement());
        } else {
            this.element.append(element);
        }
    }

    public setAttribute(attribute: string, value: string): void {
        this.element.setAttribute(attribute, value);
    }

    addCallback(callback: Function) {
        if (typeof callback === 'function') {
            this.element.addEventListener('click', (event) => callback(event));
        }
    }

    public getElement(): HTMLElement {
        return this.element;
    }
}
