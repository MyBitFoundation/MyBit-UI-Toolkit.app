import { Alert } from '../../components/';


const DocumentedAlert = {
  component: (
    <Alert handleAlertClosed={() => {}} message="Sample alert message" />
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [
      <Alert
        type="info"
        message="Info message"
        key="Alert-example-1"
        handleAlertClosed={() => {}}
      />,
      <Alert
        type="success"
        message="Success message"
        key="Alert-example-2"
        handleAlertClosed={() => {}}
      />,
      <Alert
        type="warning"
        message="Warning message"
        key="Alert-example-3"
        handleAlertClosed={() => {}}
      />,
      <Alert
        type="error"
        message="Error message"
        key="Alert-example-4"
        handleAlertClosed={() => {}}
      />,
    ],
  },
  usage: `
    <Alert
      type="info"
      message="Info message"
      key="Alert-example-1"
      handleAlertClosed={() => {}}
    />,
    <Alert
      type="success"
      message="Success message"
      key="Alert-example-2"
      handleAlertClosed={() => {}}
    />,
    <Alert
      type="warning"
      message="Warning message"
      key="Alert-example-3"
      handleAlertClosed={() => {}}
    />,
    <Alert
      type="error"
      message="Error message"
      key="Alert-example-4"
      handleAlertClosed={() => {}}
    />,
  `,
  theming: '',
  sources: [{
    command: 'npm i --save @mybit-ui/alert',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/alert',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedAlert;
