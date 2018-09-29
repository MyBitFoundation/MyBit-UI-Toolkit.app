import { Heading } from '../../components/';

const DocumentedHeading = {
  component: (
    <Heading styling={{ color: '#333' }} size={1}>
      This is our Heading
    </Heading>
  ),
  examples: {
    styling: `
      div{
        margin: 5px;
      }
    `,
    content: [
      <Heading key="heading-example-1" size={1} styling={{ color: '#4a4a4a' }}>Heading 1</Heading>,
      <Heading key="heading-example-2" size={2} styling={{ color: '#4a4a4a' }}>Heading 2</Heading>,
      <Heading key="heading-example-3" size={3} styling={{ color: '#4a4a4a' }}>Heading 3</Heading>,
      <Heading key="heading-example-4" size={4} styling={{ color: '#4a4a4a' }}>Heading 4</Heading>,
      <Heading key="heading-example-5" size={5} styling={{ color: '#4a4a4a' }}>Heading 5</Heading>,
      <Heading key="heading-example-6" size={6} styling={{ color: '#4a4a4a' }}>Heading 6</Heading>,
    ],
  },
  usage:
    `
  <Heading
    styling={{color: '#000'}}
    size={3}
  >
    This is our heading
  </Heading>
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/heading',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/heading',
    name: 'bitsrc',
  }],
  antReferences: [{
    name: 'Button',
    url: 'https://ant.design/components/button/',
  }],
};

export default DocumentedHeading;
