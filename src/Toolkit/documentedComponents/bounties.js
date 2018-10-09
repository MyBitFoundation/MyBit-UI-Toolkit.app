import { Bounties } from '../../components/';
import Theme from '../../components/theme';

const DocumentedBounties = {
  component: (
    <Bounties
      styling={Theme}
      issues={{
        Development: {
          filters: {
            bounty: true,
            'issue-approved': true,
            'issue-received': true,
            'issue-under-reviewal': true,
          },
          issues: [{
            category: 'Development',
            contractAddress: '0x64d734ed1a32380c83cbf6054c2d2ab104e51ec8',
            createdAt: '2018-07-10T08:24:28Z',
            labels: ['Bounty'],
            merged: false,
            mybitInUsd: '1.21',
            repoName: 'MyBit-Go.website',
            repoUrl: 'https://github.com/MyBitFoundation/MyBit-Go.website',
            title: 'Reduce balance to only four decimals',
            tokenSymbol: 'MYB',
            url: 'https://github.com/MyBitFoundation/MyBit-Go.website/issues/48',
            value: 50,
          }],
        },
      }}
      categories={['Development', 'Design', 'Marketing']}
      selectedCategory="Development"
      setCategory={() => {}}
      handleClickedFilter={() => {}}
      showCompletedTasks={false}
      handleShowCompletedTasks={() => {}}
      handleShowAmountInCrypto={() => {}}
      showAmountInCrypto={null}
      bountiesPerPage={3}
      currentPage={0}
      setCurrentPage={() => {}}
      orderBy="Most recent"
      handleOrderByClicked={() => {}}
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
  props: '',
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
