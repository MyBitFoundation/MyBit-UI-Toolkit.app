import { BancorWidgetButton } from '../../components/';

const DocumentedBancorWidgetButton = {
  component: (
    <BancorWidgetButton />
  ),
  examples: {
    content: [
      <BancorWidgetButton key="example-bancor-button-widget" />,
      <BancorWidgetButton key="example-bancor-button-widget-custom-title">Button Title</BancorWidgetButton>,
      <BancorWidgetButton key="example-bancor-button-widget-custom-title" operation="sell">Sell MYB</BancorWidgetButton>,
    ],
  },
  usage: `
  Default Usage:
  <BancorWidgetButton />

  With all props:
  <BancorWidgetButton
    type="1"
    baseCurrencyId="5b164627ae2482321708eb93"
    pairCurrencyId="5937d635231e97001f744267"
    primaryColor="#1890ff"
    displayCurrency="ETH"
    operation="buy"
  >
  Button Title
  </BancorWidgetButton>

  With custom title:
  <BancorWidgetButton>Button Title</BancorWidgetButton>
  `,
  theming: '',
  props: `
  type: PropTypes.number,
  baseCurrencyId: PropTypes.string,
  pairCurrencyId: PropTypes.string,
  primaryColor: PropTypes.string,
  displayCurrency: PropTypes.string,
  operation: PropTypes.oneOf(['buy', 'sell'])
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/bancorWidgetButton',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/bancorWidgetButton',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedBancorWidgetButton;
