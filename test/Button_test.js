import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import MyBitButton from '../src/components/Button';
import { theme } from '../src/components/theme';

const setup = () => {
  const props = {
    styling: theme
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
