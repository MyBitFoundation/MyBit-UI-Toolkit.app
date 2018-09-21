import { PortfolioValueItem } from '../../components/';

const DocumentedPortfolioValueItem = {
  component: (
    <PortfolioValueItem
      assetID="bitcoin-atm-value"
      name="Bitcoin ATM"
      ownership={'11.86'}
      value={'196.68'}
    />
  ),
  examples: {
    content: [
      <PortfolioValueItem
        assetID="asset-title-value"
        name="Asset Title"
        ownership={'11.86'}
        value={'196.68'}
      />,
    ],
  },
  usage: `
  <PortfolioValueItem
    assetID={"asset-title-value"}
    name={"Asset Title"}
    ownership={11.86}
    value={196.68}
  />
  `,
  theming: '',
  props: `
    assetID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ownership: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/exchangeRate',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/exchangeRate',
    name: 'bitsrc',
  }],
};

export default DocumentedPortfolioValueItem;
