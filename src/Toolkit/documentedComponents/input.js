import { Input } from '../../components/';

const DocumentedTooltip = {
  component: (
    <Input type="text" value="sdasdas" />
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [
      <Input key="input-example-1" type="text" value="sdasdas" />,
      <Input key="input-example-2" type="number" value="1231231" />,
      <Input key="input-example-3" type="text" placeholder="with tooltip" hasTooltip tooltipTitle="Sample tooltip" />,
    ],
  },
  usage:
    `
  <Button
    styling={Theme.buttons.primary.blue}
    size="medium"
  >
    This is our button
  </Button>
  `,
  theming: '',
  props: `
  tooltipTitle: PropTypes.string,
  hasTooltip: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  min: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onEnterPressed: PropTypes.func,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/input',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/input',
    name: 'bitsrc',
  }],
  antReferences: [{
    name: 'Input',
    url: 'https://ant.design/components/input/',
  }, {
    name: 'InputNumber',
    url: 'https://ant.design/components/input-number/',
  }],
};

export default DocumentedTooltip;
