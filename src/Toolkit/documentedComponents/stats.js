import { Stats } from '../../components/';

const DocumentedStats = {
  component: (
    <Stats stats={[{ name: 'Sample1', value: 'Sample value1' }, { name: 'Sample2', value: 'Sample value2' }, { name: 'Sample3', value: 'Sample value3' }]} />
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [
      <Stats key="Stats-example-1" stats={[{ name: 'Sample1', value: 'Sample value1' }, { name: 'Sample2', value: 'Sample value2' }, { name: 'Sample3', value: 'Sample value3' }]} />,
    ],
  },
  usage: '<Stats stats={[{ name: "Sample1", value: "Sample value1" }, { name: "Sample2", value: "Sample value2" }, { name: "Sample3", value: "Sample value3" }]} />',
  theming: '',
  sources: [{
    command: 'npm i --save @mybit-ui/stats',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/stats',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedStats;
