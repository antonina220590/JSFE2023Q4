import './chat_footer.css';
import { CommonParams, CommonView } from '../../../../view/view';
import { BaseElementCreator } from '../../../../utils/element-creator';

const styles = {
    FOOTER: 'footer',
    YEAR: 'footer_year',
    RSS: 'footer_rss',
    GITHUB: 'footer_github',
    TEXT: 'footer_text',
    LINK: 'github_link',
};

const text = {
    EMPTY: '',
};

export default class FooterChatView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.elementCreator.addClasses([styles.FOOTER]);
        this.additionalView();
    }

    additionalView() {
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
        const footerYear = new BaseElementCreator(DivParams);
        footerYear.addClasses([styles.YEAR, styles.TEXT]);
        footerYear.addTextContent('2024');

        const footerRSS = new BaseElementCreator(DivParams);
        footerRSS.addClasses([styles.RSS, styles.TEXT]);

        const rssLink = new BaseElementCreator(linkParams);
        rssLink.addClasses([styles.LINK]);
        rssLink.setAttribute('href', 'https://rs.school/courses/javascript-mentoring-program');
        rssLink.setAttribute('target', '_blank');
        rssLink.addTextContent('RSS');

        footerRSS.appendElement(rssLink.getElement());

        const footerGithub = new BaseElementCreator(DivParams);
        footerGithub.addClasses([styles.GITHUB, styles.GITHUB]);
        const githubLink = new BaseElementCreator(linkParams);
        githubLink.addClasses([styles.LINK]);
        githubLink.setAttribute('href', 'https://github.com/antonina220590');
        githubLink.setAttribute('target', '_blank');
        githubLink.addTextContent('Antonina Tyurina');

        footerGithub.appendElement(githubLink.getElement());

        this.elementCreator
            .getElement()
            .append(footerYear.getElement(), footerRSS.getElement(), footerGithub.getElement());
    }
}
