import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import MyBitLogo from '../src/components/Logo';

const setup = () => {
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<MyBitLogo/>)

  return {
    enzymeWrapper
  }
}

describe('MyBitLogo', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('img'));
  })
})
