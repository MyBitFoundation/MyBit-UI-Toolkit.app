import { StatCard } from '../../components/';

const DocumentedStatCard = {
  component: (
    <StatCard stat={{ name: 'Sample', value: 'Sample value' }} />
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [
      <StatCard key="StatCard-example-1" stat={{ name: 'Statistic...', value: '...with value' }} />,
      <StatCard key="StatCard-example-2" stat={{ name: 'Stat without value' }} />,
    ],
  },
  usage: '<StatCard stat={{ name: "Sample", value: "Sample value" }} />',
  theming: '',
  sources: [{
    command: 'npm i --save @mybit-ui/statCard',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/statCard',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedStatCard;
