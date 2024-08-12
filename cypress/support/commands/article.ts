import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'Экономика!?',
    img: 'https://www.interfax.ru/ftproot/textphotos/2018/12/28/ec700.jpg',
    views: 2723,
    createdAt: '09.09.2024',
    userId: '1',
    type: [
        'ECONOMICS',
    ],
};

export const createArticle = (article?: Article) => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'asdf' },
    body: article ?? defaultArticle,
}).then((response) => response.body);

export const removeArticle = (articleId: string) => cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asdf' },
});

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            removeArticle(articleId: string): Chainable<Article>
        }
    }
}
