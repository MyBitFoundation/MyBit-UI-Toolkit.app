import { TotalPortfolioValue } from '../../components/';

const valueAssets = [
    {
        assetID: 'asset-id-1',
        name: 'Example Asset',
        ownership: '22',
        value: '14081.25'
    },
    {
        assetID: 'asset-id-2',
        name: 'Example Asset 2',
        ownership: '22',
        value: '14081.25'
    },
    {
        assetID: 'asset-id-3',
        name: 'Example Asset 3',
        ownership: '22',
        value: '14081.25'
    }
]

const DocumentedTotalPortfolioValue = {
  component: (
    <TotalPortfolioValue totalPortfolioValue={"1234"} portfolioValueAssets={valueAssets} />
  ),
  examples: {
    content: [
        <TotalPortfolioValue totalPortfolioValue={"0"} portfolioValueAssets={[]} />,
        <TotalPortfolioValue totalPortfolioValue={"12234"} portfolioValueAssets={valueAssets} />,
    ],
  },
  usage: `
    const valueAssets = [
        {
            assetID: 'asset-id-1',
            name: 'Example Asset',
            ownership: '22',
            value: '14081.25'
        },
        {
            assetID: 'asset-id-2',
            name: 'Example Asset 2',
            ownership: '22',
            value: '14081.25'
        },
        {
            assetID: 'asset-id-3',
            name: 'Example Asset 3',
            ownership: '22',
            value: '14081.25'
        }
    ]
    <TotalPortfolioValue totalPortfolioValue={"0"} portfolioValueAssets={[]} />,
    <TotalPortfolioValue totalPortfolioValue={"12234"} portfolioValueAssets={valueAssets} />
  `,
  theming: '',
  props: `
  totalPortfolioValue: PropTypes.string.isRequired,
    portfolioValueAssets: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      ownership: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/Filter',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/Filter',
    name: 'bitsrc',
  }],
};

export default DocumentedTotalPortfolioValue;
