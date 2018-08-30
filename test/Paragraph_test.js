import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import MyBitParagraph from '../src/components/Paragraph';

const setup = () => {
  const props = {
    children: 'This is a paragraph',
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<MyBitParagraph {...props} />)

  return {
    enzymeWrapper
  }
}

describe('MyBitParagraph', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('p'));
  })
})
