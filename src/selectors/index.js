import {createSelector} from 'reselect';

export const filtersSelector = (store) => store.filters
export const articlesSelector = (store) => store.articles
export const commentsSelector = (store) => store.comments
export const idSelector = (_, ownProps) => ownProps.id

export const filteredArticlesSelector = createSelector(
    filtersSelector,
    articlesSelector,
    (filters, articles) => {
        const {selected, dateRange: {from, to}} = filters

        console.log('filteredArticlesSelector');
        //
        // let filterResult = {};
        //
        // for(let id in articles) {
        //     const article = articles[id];
        //     const publishedDate = Date.parse(article.date);
        //     if(!selected.length ||
        //         selected.find((selected) => selected.value === id) &&
        //         (!from || !to || (publishedDate > from && publishedDate < to))
        //     ) {
        //         filterResult[id] = article;
        //     }
        // }
        //
        // return filterResult;
        //console.log(filterResult)
        //
        return Object.keys(articles).filter(id => {
            const article = articles[id];
            const publishedDate = Date.parse(article.date);
            return (
                    !selected.length ||
                    selected.find((selected) => selected.value === id)
                ) &&
                (
                    (!from || !to || (publishedDate > from && publishedDate < to))
                )
        })
    }
)

export const createArticleSelector = () => createSelector(
    articlesSelector,
    idSelector,
    (articles, id) => {
        console.log('articleSelector', id);
        return articles[id]
    }
)

export const createCommentSelector = () => createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
        console.log('commentSelector', id);
        return comments[id]
    }
)
