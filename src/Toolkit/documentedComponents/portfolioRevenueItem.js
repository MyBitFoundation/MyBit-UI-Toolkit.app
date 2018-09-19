import { PortfolioRevenueItem } from '../../components/';

const DocumentedPortfolioRevenueItem = {
  component: (
    <PortfolioRevenueItem
      assetID={"bitcoin-atm"}
      name={"Bitcoin ATM"}
      totalRevenue={1392.54}
      monthlyRevenue={96.68}
    />
  ),
  examples: {
    content: [
      <PortfolioRevenueItem
        assetID={"asset-title"}
        name={"Asset Title"}
        totalRevenue={1392.54}
        monthlyRevenue={96.68}
    />
    ],
  },
  usage: `
  <PortfolioRevenueItem
    assetID={"asset-title"}
    name={"Asset Title"}
    totalRevenue={1392.54}
    monthlyRevenue={96.68}
  />
  `,
  theming: '',
  props: `
  assetID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  monthlyRevenue: PropTypes.number.isRequired,
  totalRevenue: PropTypes.number.isRequired,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/exchangeRate',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/exchangeRate',
    name: 'bitsrc',
  }],
};

export default DocumentedPortfolioRevenueItem;