import { Heading } from '../../components/';

const DocumentedHeading = {
  component: (
    <Heading size={1}>
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
      <Heading key="heading-example-1" size={1}>Heading 1</Heading>,
      <Heading key="heading-example-2" size={2}>Heading 2</Heading>,
      <Heading key="heading-example-3" size={3}>Heading 3</Heading>,
      <Heading key="heading-example-4" size={4}>Heading 4</Heading>,
      <Heading key="heading-example-5" size={5}>Heading 5</Heading>,
      <Heading key="heading-example-6" size={6}>Heading 6</Heading>,
    ],
  },
  usage:
    `
  <Heading size={3} >
    This is our heading
  </Heading>
  `,
  props: `
  styling: PropTypes.object,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/heading',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/heading',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedHeading;
