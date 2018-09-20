import { TotalPortfolioRevenue } from '../../components/';

const assets = [
  {
    assetID: 'asset-id-1',
    name: 'Example Asset',
    monthlyRevenue: '500.92',
    totalRevenue: '14081.25',
  },
  {
    assetID: 'asset-id-2',
    name: 'Example Asset 2',
    monthlyRevenue: '10.92',
    totalRevenue: '181.36',
  },
  {
    assetID: 'asset-id-3',
    name: 'Example Asset 3',
    monthlyRevenue: '12.42',
    totalRevenue: '81.16',
  },
];

const DocumentedTotalPortfolioRevenue = {
  component: (
    <TotalPortfolioRevenue totalPortfolioRevenue="1234" portfolioRevenueAssets={assets} />
  ),
  examples: {
    content: [
      <TotalPortfolioRevenue totalPortfolioRevenue="0" portfolioRevenueAssets={[]} />,
      <TotalPortfolioRevenue totalPortfolioRevenue="12234" portfolioRevenueAssets={assets} />,
    ],
  },
  usage: `
    const assets = [
        {
            assetID: 'asset-id-1',
            name: 'Example Asset',
            monthlyRevenue: '500.92',
            totalRevenue: '14081.25'
        },
        {
            assetID: 'asset-id-2',
            name: 'Example Asset 2',
            monthlyRevenue: '10.92',
            totalRevenue: '181.36'
        },
        {
            assetID: 'asset-id-3',
            name: 'Example Asset 3',
            monthlyRevenue: '12.42',
            totalRevenue: '81.16'
        }
    ]
    <TotalPortfolioRevenue totalPortfolioRevenue={"12234"} portfolioRevenueAssets={assets} />
  `,
  theming: '',
  props: `
  totalPortfolioRevenue: PropTypes.string.isRequired,
  portfolioRevenueAssets: PropTypes.arrayOf(PropTypes.shape({
      assetID: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      monthlyRevenue: PropTypes.string.isRequired,
      totalRevenue: PropTypes.string.isRequired,
  })).isRequired
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/Filter',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/Filter',
    name: 'bitsrc',
  }],
};

export default DocumentedTotalPortfolioRevenue;
