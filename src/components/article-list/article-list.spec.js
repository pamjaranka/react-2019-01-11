import React from 'react';
import config from '../../config';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleList from '../article-list';
import mockedArticles from '../../fixtures';

Enzyme.configure({adapter: new Adapter()});

describe('Article List', function () {
    it('should render', () => {
        const wrapper = mount(
            <ArticleList articles = {mockedArticles} />
        );

        expect(wrapper.find('.test--art__container').length)
            .toEqual(7)
    });

    it('should render without open articles', () => {
        const wrapper = render(
            <ArticleList articles = {mockedArticles} />
        );

        expect(wrapper.find('.test--article_body').length)
            .toEqual(0)
    });

    it('should show article text after click on button', () => {
        const wrapper = mount(
            <ArticleList articles = {mockedArticles} />
        );

        wrapper.find('.test--article__btn').at(0).simulate('click');

        expect(wrapper.find('.test--article_body').length)
            .toEqual(1)
    });

    it('should hide article text after secons click on button', (done) => {
        const wrapper = mount(
            <ArticleList articles={[mockedArticles[0]]}/>
        );

        wrapper.find('.test--article__btn').at(0).simulate('click');

        wrapper.find('.test--article__btn').at(0).simulate('click');

        setTimeout(() => {
            wrapper.update();

            expect(wrapper.find('.test--article_body').length)
                .toEqual(0);

            done();

        }, config.TRANSITION_ENTER + config.TRANSITION_LEAVE);
    });


    it('should call fetch data on init', (done) => {
        const wrapper = mount(
            <ArticleList
                articles = {mockedArticles}
                fetchData={() => done()}
            />
        )
    });

});