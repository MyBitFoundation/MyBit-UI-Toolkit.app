import { TotalPortfolioRevenue } from '../../components/';

const DocumentedTotalPortfolioRevenue = {
  component: (
    <TotalPortfolioRevenue totalPortfolioRevenue={"231231"} portfolioRevenueAssets={[]} />
  ),
  examples: {
    content: [
    ],
  },
  usage: `
    <Filter checked styling={Theme.filters}> Checked tag</Filter>
  `,
  theming: '',
  sources: [{
    command: 'npm i --save @mybit-ui/Filter',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/Filter',
    name: 'bitsrc',
  }],
};

export default DocumentedTotalPortfolioRevenue;
