import { Theme, Button } from '../../components/';

const DocumentedButton = {
  component: (
    <Button
      styling={Theme.buttons.primary.blue}
      size="medium"
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
      >
        Small button
      </Button>,
      <Button
        styling={Theme.buttons.primary.blue}
        size="large"
      >
        Large button
      </Button>,
      <Button
        styling={Theme.buttons.secondary}
        disabled
      >
        Disabled button
      </Button>,
      <Button
        styling={Theme.buttons.primary.blue}
        active
      >
        Active button
      </Button>,
      <Button
        styling={Theme.buttons.primary.green}
        type="primary"
        shape="circle"
        icon="search"
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
  antReferences: [{
    name: 'Button',
    url: 'https://ant.design/components/button/',
  }],
};

export default DocumentedButton;
