import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';
import { isMainThread } from 'worker_threads';

describe('Display', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Display displayValue={''} />));

  isMainThread('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

});