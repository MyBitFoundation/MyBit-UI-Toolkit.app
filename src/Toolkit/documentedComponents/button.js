import { Theme, Button } from '../../components/';

const DocumentedButton = {
  component: (
    <Button
      styling={Theme.buttons.primary.blue}
    >
      This is our button
    </Button>
  ),
  examples: {
    styling: `
      div{
        margin: 5px;
      }
    `,
    content: [
      <Button
        styling={Theme.buttons.primary.green}
        size="small"
        key="button-example-1"
      >
        Small button
      </Button>,
      <Button
        styling={Theme.buttons.primary.blue}
        size="large"
        key="button-example-2"
      >
        Large button
      </Button>,
      <Button
        styling={Theme.buttons.secondary}
        disabled
        key="button-example-3"
      >
        Disabled button
      </Button>,
      <Button
        styling={Theme.buttons.primary.blue}
        active
        key="button-example-4"
      >
        Active button
      </Button>,
      <Button
        styling={Theme.buttons.primary.green}
        type="primary"
        shape="circle"
        icon="search"
        key="button-example-5"
      />,
    ],
  },
  usage:
    `
  <Button
    styling={Theme.buttons.primary.blue}
    size="medium"
  >
    This is our button
  </Button>
  `,
  theming:
  `
  buttons: {
    primary: {
      green: {
        color: #ffffff,
        colorHover: #ffffff,
        colorActive: #ffffff,
        backgroundColor: blue,
        backgroundColorHover: blueHover,
        backgroundColorActive: blueActive,
        borderColor: blue,
        borderColorHover: blueHover,
        borderColorActive: blueActive,
      },
    }
  }
`,
  sources: [{
    command: 'npm i --save @mybit-ui/button',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/button',
    name: 'bitsrc',
  }],
  antReferences: [{
    name: 'Button',
    url: 'https://ant.design/components/button/',
  }],
};

export default DocumentedButton;
