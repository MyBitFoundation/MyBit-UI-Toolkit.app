import { Theme, Filter } from '../../components/';

const DocumentedFilter = {
  component: (
    <Filter checked styling={Theme.filters}> Sample Filter </Filter>
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [
      <Filter key="Filter-example-1" checked styling={Theme.filters}> Checked tag</Filter>,
      <Filter key="Filter-example-2" styling={Theme.filters}> Unchecked tag</Filter>,
    ],
  },
  usage: `
    <Filter checked styling={Theme.filters}> Checked tag</Filter>
  `,
  theming: '',
  sources: [{
    command: 'npm i --save @mybit-ui/Filter',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/Filter',
    name: 'bitsrc',
  }],
};

export default DocumentedFilter;
