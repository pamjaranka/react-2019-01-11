import articlesMock from '../fixtures';
import {FILTER_ARTICLE} from '../constants';

const defaultarticleIds = articlesMock.map((item) => item.id);

export default (articleIds = defaultarticleIds, action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_ARTICLE:
            //compare articleIds with payload
            console.log(articleIds)
            if (payload.length) {
                return payload.map((item) => item.value);
            } else {
                return defaultarticleIds;
            }
            break;
        default:
            return articleIds
    }
}