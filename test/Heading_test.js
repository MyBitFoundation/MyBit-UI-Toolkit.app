import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import MyBitHeading from '../src/components/Heading';

const setup = () => {
  const props = {
    children: 'This is a header',
    size: 2,
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<MyBitHeading {...props} />)

  return {
    enzymeWrapper
  }
}

describe('MyBitHeading', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('h2'));
  })
})
