import { Bounty } from '../../components/';

const DocumentedBounties = {
  component: (
    <Bounty
      createdAt="2018-07-10T08:24:28Z"
      labels={['Bounty']}
      merged={false}
      mybitInUsd="1.21"
      repoName="MyBit-Go.website"
      repoUrl="https://github.com/MyBitFoundation/MyBit-Go.website"
      title="Reduce balance to only four decimals"
      tokenSymbol="MYB"
      url="https://github.com/MyBitFoundation/MyBit-Go.website/issues/48"
      value={50}
      showAmountInCrypto={false}
    />
  ),
  examples: {
    styling: `
      div{
        margin: 5px;
      }
    `,
    content: [],
  },
  usage:
    `
  <Bounties type="solid" size="medium">
    This is our Bounties
  </Bounties>
  `,
  theming: '',
  props: `
    title: PropTypes.string.isRequired,
    repoName: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
    tokenSymbol: PropTypes.string.isRequired,
    merged: PropTypes.bool.isRequired,
    showAmountInCrypto: PropTypes.bool.isRequired,
    mybitInUsd: PropTypes.string.isRequired,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/Bounties',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/Bounties',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedBounties;
