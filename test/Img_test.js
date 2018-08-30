import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Img from '../src/components/Img';

const setup = () => {
  const props = {
    alt: 'Image description',
    src: "/link-to-image"
  }

  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<Img {...props}/>)

  return {
    enzymeWrapper
  }
}

describe('Img', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('img'));
  })
})
