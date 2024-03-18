export interface Element {
    HTMLtag?: keyof HTMLElementTagNameMap;
}

export interface FullElementDescription<T extends HTMLElement = HTMLElement> extends Element {
    classNames: string[];
    parent?: HTMLElement;
    text?: string;
    callback?: CallbackGen<T>;
}

export type CallbackGen<T> = (data: T) => void;

export class BaseElementCreator<T extends HTMLElement = HTMLElement> {
    protected element: T;

    constructor(node: FullElementDescription<T>) {
        const element = document.createElement(node.HTMLtag ?? 'div') as T;
        this.element = element;
        this.createNewElement(node);
    }

    public createNewElement(node: FullElementDescription<T>): void {
        this.element = document.createElement(node.HTMLtag ?? 'div') as T;
        this.addClasses(node.classNames);
        this.toggleClasses(node.classNames);
        this.removeClasses(node.classNames);
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

    setAttribute(attribute: string, value: string): void {
        this.element.setAttribute(attribute, value);
    }

    public getElement(): HTMLElement {
        return this.element;
    }
}
