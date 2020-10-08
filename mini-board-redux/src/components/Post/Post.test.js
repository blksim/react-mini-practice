import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from './Post';

Enzyme.configure({ adapter: new Adapter() });

describe('<Post />', () => {
  it('renders Post class', () => {
    const wrapper = shallow(<Post />);
    expect(wrapper.hasClass('Post'));
  });

  it('renders title and body when passed as props', () => {
    const wrapper = shallow(<Post title="title" body="body" />);
    wrapper.find('h3').text('title');
    wrapper.find('p').text('body');
  });
});
