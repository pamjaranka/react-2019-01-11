import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './index';
import mockedComments from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
    it('should render only button and no comments by default', () => {
        const wrapper = mount(
            <CommentList comments={mockedComments[0].comments} />
        );

        expect(wrapper.find('.test--comment__btn').length)
            .toEqual(1);

        expect(wrapper.find('.test--comment__container').length)
            .toEqual(0);
    });

    it('should show comment list after click on button', () => {
        const wrapper = mount(
            <CommentList comments={mockedComments[0].comments} isOpen />
        );

        wrapper.find('.test--comment__btn').at(0).simulate('click');

        expect(wrapper.find('.test--comment__container').length)
            .toEqual(5);
    });
});