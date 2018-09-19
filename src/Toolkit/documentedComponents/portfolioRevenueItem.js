import { PortfolioRevenueItem } from '../../components/';

const DocumentedPortfolioRevenueItem = {
  component: (
    <PortfolioRevenueItem
<<<<<<< HEAD
      assetID={"bitcoin-atm-revenue"}
      name={"Bitcoin ATM"}
=======
      assetID="bitcoin-atm"
      name="Bitcoin ATM"
>>>>>>> 86bd163ce34cedfb50bdb23cdefa57dab6b09df9
      totalRevenue={1392.54}
      monthlyRevenue={96.68}
    />
  ),
  examples: {
    content: [
      <PortfolioRevenueItem
<<<<<<< HEAD
        assetID={"asset-title-revenue"}
        name={"Asset Title"}
        totalRevenue={1392.54}
        monthlyRevenue={96.68}
      />
=======
        assetID="asset-title"
        name="Asset Title"
        totalRevenue={1392.54}
        monthlyRevenue={96.68}
      />,
>>>>>>> 86bd163ce34cedfb50bdb23cdefa57dab6b09df9
    ],
  },
  usage: `
  <PortfolioRevenueItem
    assetID={"asset-title-revenue"}
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
