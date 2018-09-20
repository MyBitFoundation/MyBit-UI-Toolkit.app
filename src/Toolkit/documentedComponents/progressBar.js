import { ProgressBar } from '../../components/';
import { Progress } from 'antd';
import 'antd/dist/antd.css';

const DocumentedProgressBar = {
  component: (
    <div style={{ width: '60%'}}>
     <ProgressBar percent={30} status={"active"}  />
    </div>
  ),
  examples: {
    content: [
        <div style={{width: '60%'}} key={"example"}>
            <ProgressBar percent={100} status={"success"}  />
            <ProgressBar percent={32} status={"exception"}  />
            <ProgressBar percent={80} status={"active"}  />
            <ProgressBar percent={100} status={"success"} showInfo={false} />
        </div>
    ],
  },
  usage: `
    <ProgressBar percent={100} status={"success"}  />
    <ProgressBar percent={32} status={"exception"}  />
    <ProgressBar percent={80} status={"active"}  />
    <ProgressBar percent={100} showInfo={false} />
  `,
  theming: '',
  props: `
  size: PropTypes.string,
  percent: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['success', 'exception', 'active']).isRequired,
  showInfo: PropTypes.bool
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/spin',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/spin',
    name: 'bitsrc',
  }],
};

export default DocumentedProgressBar;
