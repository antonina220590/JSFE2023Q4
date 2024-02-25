import './sources.css';
import { NewsSource } from '../interfaces';
import { assertValues } from '../news/assertions';

class Sources {
    public draw(data: NewsSource[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null =
            document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        assertValues(sourceItemTemp);
        data.forEach((item: NewsSource) => {
            const sourceClone: Node = sourceItemTemp.content.cloneNode(true);
            if (!(sourceClone instanceof DocumentFragment)) {
                return new Error('Error!');
            } else {
                const sourceItemName: Element | null = sourceClone.querySelector('.source__item-name');
                const sourceItem: Element | null = sourceClone.querySelector('.source__item');
                assertValues(sourceItemName);
                assertValues(sourceItem);

                sourceItemName.textContent = item.name;
                sourceItem.setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            }
        });
        const newSource: Element | null = document.querySelector('.sources');
        assertValues(newSource);

        newSource.append(fragment);
    }
}

export default Sources;
