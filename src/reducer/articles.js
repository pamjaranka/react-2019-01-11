import articlesMock from '../fixtures';
import {updateFilterData} from './filter';
import {DELETE_ARTICLE, FILTER_ARTICLES} from '../constants';

const defaultArticles = articlesMock.map((article) => {
    const articleNew = Object.assign({}, article);
    articleNew.isVisible = true;

    return articleNew;
});

const filteredArticlesHandler = (articles, payload) => {
    const filterData = updateFilterData(payload.data, payload.key, payload.value);

    const selectedIds = filterData.selectValue && filterData.selectValue.map((item) => item.value);
    const dateFrom = filterData.datePickerValue.from && Date.parse(filterData.datePickerValue.from);
    const dateTo = filterData.datePickerValue.to && Date.parse(filterData.datePickerValue.to);

    const filteredArticles = articles.map((article) => {

        const articleF = Object.assign({}, article);

        let isVisible = true;

        if(selectedIds) {
            isVisible = selectedIds.includes(article.id);
        }

        if(isVisible && dateFrom) {
            isVisible = Date.parse(article.date) >= dateFrom;
        }

        if(isVisible && dateTo) {
            isVisible = Date.parse(article.date) <= dateTo;
        }

        articleF.isVisible = isVisible;

        return articleF;
    });

    return filteredArticles;
};

export default (articles = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_ARTICLES:

            const filteredArticles = filteredArticlesHandler(articles, payload);

            return filteredArticles;
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id);
        default:
            return articles
    }
}