import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import App from '../public/app/components/App';

describe('<App />', () => {

  it('should have h2 with Hello React!', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.container').children().html()).to.equal('<h2>Hello React!</h2>')
  });
});
