import { Theme, Switch } from '../../components/';


const DocumentedSwitch = {
  component: (
    <Switch styling={Theme.switch} checked onChange={() => {}} />
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [
      <Switch key="switch-example-1" styling={Theme.switch} checked onChange={() => {}} />,
      <Switch key="switch-example-2" styling={Theme.switch} onChange={() => {}} />,
    ],
  },
  usage: '<Switch styling={Theme.switch} checked onChange={() => {}} />',
  theming: '',
  sources: [{
    command: 'npm i --save @mybit-ui/switch',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/switch',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedSwitch;
