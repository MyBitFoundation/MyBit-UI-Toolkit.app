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
  props: `
  isRight: PropTypes.bool,
  type: PropTypes.string.isRequired,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/icon',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/icon',
    name: 'bitsrc',
  }],
  antReferences: [{
    name: 'Icon',
    url: 'https://ant.design/components/icon/',
  }],
};

export default DocumentedIcon;
