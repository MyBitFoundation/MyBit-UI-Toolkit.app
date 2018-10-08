import { Filter } from '../../components/';

const DocumentedFilter = {
  component: (
    <Filter checked > Sample Filter </Filter>
  ),
  examples: {
    styling: `
      > div{
        margin: 5px;
      }
    `,
    content: [
      <Filter key="Filter-example-1" checked > Checked tag</Filter>,
      <Filter key="Filter-example-2" > Unchecked tag</Filter>,
    ],
  },
  usage: `
    <Filter checked > Checked tag</Filter>
  `,
  props: `
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    styling: PropTypes.object,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/Filter',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/Filter',
    name: 'bitsrc',
  }],
  antReferences: [
    {
      name: 'Tag.CheckableTag',
      url: 'https://ant.design/components/tag/',
    },
  ],
};

export default DocumentedFilter;
