import { PortfolioDropdown } from '../../components/';

const valueAssets = [
  {
    id: 'asset-id-1',
    name: 'Example Asset',
    data: {
      ownership: '22',
      value: '14081.25',
    },
  },
  {
    id: 'asset-id-2',
    name: 'Example Asset 2',
    data: {
      ownership: '22',
      value: '14081.25',
    },
  },
  {
    id: 'asset-id-3',
    name: 'Example Asset 3',
    data: {
      ownership: '22',
      value: '14081.25',
    },
  },
];

const DocumentedPortfolioDropdown = {
  component: (
    <PortfolioDropdown
      name="Sample"
      icon="line-chart"
      color="blue"
      portfolioData={valueAssets}
      total={`${valueAssets.reduce((acc, curr) => {
        const total = acc + parseFloat(curr.data.value);
        return total;
      }, 0)}`}
    />
  ),
  examples: {
    content: [
      <PortfolioDropdown
        icon="pie-chart"
        color="red"
        name="Sample One"
        portfolioData={[]}
        total="0"
      />,
      <PortfolioDropdown
        name="Sample Two"
        icon="bar-chart"
        color="green"
        portfolioData={valueAssets}
        total={`${valueAssets.reduce((acc, curr) => {
          const total = acc + parseFloat(curr.data.value);
          return total;
        }, 0)}`}
      />,
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
    <PortfolioDropdown total={"0"} portfolioData={[]} />,
    <PortfolioDropdown total={"12234"} portfolioData={valueAssets} />
  `,
  theming: '',
  props: `
  PortfolioDropdown: PropTypes.string.isRequired,
    portfolioData: PropTypes.arrayOf(PropTypes.shape({
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
  antReferences: [],
};

export default DocumentedPortfolioDropdown;
