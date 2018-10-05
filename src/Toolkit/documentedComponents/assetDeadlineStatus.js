import { AssetDeadlineStatus } from '../../components/';

const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 22);
futureDate.setHours(futureDate.getHours() + 6);

const DocumentedAssetDeadlineStatus = {
  component: (
    <AssetDeadlineStatus
      status="expired"
      deadline={new Date(2018, 11, 24, 10, 33, 30)}
    />
  ),
  examples: {
    styling: `
        >div{
        margin: 10px;
        }
    `,
    content: [
      <AssetDeadlineStatus
        status="expired"
        deadline={new Date(2017, 7, 24, 10, 33, 30)}
        key="example1"
      />,
      <AssetDeadlineStatus
        status="active"
        deadline={futureDate}
        key="example2"
      />,
      <AssetDeadlineStatus
        status="funded"
        deadline={new Date()}
        key="example3"
      />,
    ],
  },
  usage: `
    //past date
    <AssetDeadlineStatus
        status={'expired'}
        deadline={new Date(2017, 7, 24, 10, 33, 30)}
    />,
    //future_date
    var future_date = new Date();
    future_date.setDate(future_date.getDate() + 22);
    future_date.setHours(future_date.getHours() + 6);
    <AssetDeadlineStatus
        status={'active'}
        deadline={future_date}
    />,
    //no date required if the asset is fully funded
    <AssetDeadlineStatus
        status={'funded'}
        deadline={new Date()}
    />
  `,
  theming: '',
  props: `
  status: PropTypes.oneOf(['expired', 'active', 'funded']).isRequired,
  deadline: PropTypes.instanceOf(Date).isRequired
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/assetDeadlineStatus',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/assetDeadlineStatus',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedAssetDeadlineStatus;
