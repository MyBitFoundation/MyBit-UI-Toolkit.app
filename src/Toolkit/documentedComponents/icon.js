import { Icon } from '../../components/';


const DocumentedIcon = {
  component: (
    <Icon type="close" />
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [
      <Icon type="check" />,
      <Icon type="close" />,
      <Icon type="plus" />,
      <Icon type="pause" />,
    ],
  },
  usage: '<Icon type="close" />',
  theming: '',
  sources: [{
    command: 'npm i --save @mybit-ui/icon',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/icon',
    name: 'bitsrc',
  }],
};

export default DocumentedIcon;
