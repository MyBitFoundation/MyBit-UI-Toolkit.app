import { AssetInvestmentStatus } from '../../components/';

const DocumentedAssetInvestmentStatus = {
  component: (
    <AssetInvestmentStatus
      raised="322.38 USD"
      goal="$100,000.00"
      investors={3}
    />
  ),
  examples: {
    content: [
      <AssetInvestmentStatus
        raised="322.38 USD"
        goal="$100,000.00"
        investors={3}
      />,
    ],
  },
  usage: `
    <AssetInvestmentStatus
        raised={"322.38 USD"}
        goal={"$100,000.00"}
        investors={3}
    />
  `,
  theming: '',
  props: `
  raised: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  investors: PropTypes.number,
  className: PropTypes.string
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/assetInvestmentStatus',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/assetInvestmentStatus',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedAssetInvestmentStatus;
