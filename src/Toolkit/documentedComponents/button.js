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
  examples: [
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
      isActive
    >
        Active button
    </Button>,
  ],
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
