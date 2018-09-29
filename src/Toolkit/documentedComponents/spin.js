import { Theme, Spin } from '../../components/';

const DocumentedSpin = {
  component: (
    <Spin styling={Theme.spin} />
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [
      <Spin key="Spin-example-1" styling={Theme.spin} />,
      <Spin key="Spin-example-1" styling={Theme.spin} size="default" />,
      <Spin key="Spin-example-2" styling={Theme.spin} size="large" />,
    ],
  },
  usage: '<Spin styling={Theme.spin} />',
  theming: '',
  sources: [{
    command: 'npm i --save @mybit-ui/spin',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/spin',
    name: 'bitsrc',
  }],
};

export default DocumentedSpin;
