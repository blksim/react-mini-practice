import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Posts from './Posts';

Enzyme.configure({ adapter: new Adapter() });

describe('<Posts />', () => {
  it('renders form', () => {
    const posts = shallow(Posts);
    expect(posts).exists('form');
  });
});