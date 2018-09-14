import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import MyBitButton from '../src/components/Button';
import { Theme } from '../src/components';

const setup = () => {
  const props = {
    styling: Theme.buttons.primary.blue,
    children: 'This is a button',
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<MyBitButton {...props} />)

  return {
    enzymeWrapper
  }
}

describe('MyBitButton', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('button'));
  })
})
