import { ConnectionStatus } from '../../components/';

const DocumentedTooltip = {
  component: (
    <ConnectionStatus network="main" loading={false} />
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [
      <ConnectionStatus network="main" loading={false} />,
      <ConnectionStatus network="ropsten" loading={false} />,
      <ConnectionStatus loading />,
    ],
  },
  usage: '<ConnectionStatus network="main" loading={false} />',
  theming: '',
  sources: [{
    command: 'npm i --save @mybit-ui/connection-status',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/connection-status',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedTooltip;
