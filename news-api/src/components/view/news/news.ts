import './news.css';
import { NewsArticle } from '../interfaces';
import { assertValues } from './assertions';
export class News {
    draw(data: NewsArticle[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        assertValues(newsItemTemp);
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            if (!(newsClone instanceof DocumentFragment)) {
                return new Error('Error!');
            } else {
                const newsItem = newsClone.querySelector('.news__item');
                const newsMetaPhoto = newsClone.querySelector<HTMLTemplateElement>('.news__meta-photo');
                const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
                const newsMetaDate = newsClone.querySelector('.news__meta-date');
                const newsTitle = newsClone.querySelector('.news__description-title');
                const newsSource = newsClone.querySelector('.news__description-source');
                const newsContent = newsClone.querySelector('.news__description-content');
                const newsReadMore = newsClone.querySelector('.news__read-more a');
                assertValues(newsItem);
                assertValues(newsMetaPhoto);
                assertValues(newsMetaAuthor);
                assertValues(newsMetaDate);
                assertValues(newsTitle);
                assertValues(newsSource);
                assertValues(newsContent);
                assertValues(newsReadMore);

                if (idx % 2) newsItem.classList.add('alt');
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                newsMetaAuthor.textContent = item.author || item.source.name;
                newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                newsTitle.textContent = item.title;
                newsSource.textContent = item.source.name;
                newsContent.textContent = item.description;
                newsReadMore.setAttribute('href', item.url);

                fragment.append(newsClone);
            }
        });
        const newsNew = document.querySelector('.news');
        assertValues(newsNew);
        newsNew.innerHTML = '';
        newsNew.appendChild(fragment);
    }
}
export default News;
