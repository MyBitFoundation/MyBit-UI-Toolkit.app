import { AssetTitle } from '../../components/';

const DocumentedAssetTitle = {
  component: (
    <AssetTitle
      assetName="Bitcoin ATM"
      city="Sofia"
      country="Bulgaria"
    />
  ),
  examples: {
    content: [
      <AssetTitle
        assetName="Bitcoin ATM"
        city="Sofia"
        country="Bulgaria"
      />,
    ],
  },
  usage: `
    <AssetTitle 
        assetName={"Bitcoin ATM"}
        city={"Sofia"}
        country={"Bulgaria"}
    />
  `,
  theming: '',
  props: `
  assetName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  className: PropTypes.string
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/assetTitle',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/assetTitle',
    name: 'bitsrc',
  }],
};

export default DocumentedAssetTitle;
