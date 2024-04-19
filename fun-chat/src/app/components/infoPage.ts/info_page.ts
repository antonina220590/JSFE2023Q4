import './info_page.css';
import { CommonParams, CommonView } from '../../view/view';
import { BaseElementCreator } from '../../utils/element-creator';

const styles = {
    WRAPPER: 'info_wrapper',
    INFO: 'chat_info',
    LINK: 'github_link',
    BUTTON: 'button',
};

const text = {
    EMPTY: '',
    APP_NAME: 'Fun Chat',
    INFO: 'Welcome to our Fun Chat application! This is an amazing application that makes the people you love closer than ever.',
    GITHUB: 'Antonina Tyuirna',
    CLOSE: 'Close',
};

export default class InfoChatView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.elementCreator.addClasses([styles.WRAPPER]);
        this.additionalView();
    }

    additionalView() {
        const H1Params: CommonParams = {
            HTMLtag: 'h1',
            text: text.EMPTY,
            callback: null!,
        };

        const spanParams: CommonParams = {
            HTMLtag: 'span',
            text: text.EMPTY,
            callback: null!,
        };

        const DivParams: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };

        const linkParams: CommonParams = {
            HTMLtag: 'a',
            text: text.EMPTY,
            callback: null!,
        };

        const buttonParams: CommonParams = {
            HTMLtag: 'button',
            text: text.EMPTY,
            callback: null!,
        };

        const closeBtn = new BaseElementCreator(buttonParams);
        closeBtn.addClasses([styles.BUTTON]);
        closeBtn.addTextContent(text.CLOSE);

        const title = new BaseElementCreator(H1Params);
        title.addTextContent('Fun Chat');

        const description = new BaseElementCreator(spanParams);
        description.addClasses([styles.INFO]);
        description.addTextContent(
            'Welcome to our Fun Chat application! This is an amazing application that makes the people you love closer than ever.'
        );

        const footerGithub = new BaseElementCreator(DivParams);
        const githubLink = new BaseElementCreator(linkParams);
        githubLink.addClasses([styles.LINK]);
        githubLink.setAttribute('href', 'https://github.com/antonina220590');
        githubLink.setAttribute('target', '_blank');
        githubLink.addTextContent('Antonina Tyurina');

        footerGithub.appendElement(githubLink);

        this.elementCreator
            .getElement()
            .append(title.getElement(), description.getElement(), footerGithub.getElement(), closeBtn.getElement());
    }
}
