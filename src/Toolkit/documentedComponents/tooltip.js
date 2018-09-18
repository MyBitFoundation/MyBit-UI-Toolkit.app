import { Tooltip } from '../../components/';

const DocumentedTooltip = {
  component: (
    <Tooltip title="prompt text">
      <span>Tooltip will show when mouse enter.</span>
    </Tooltip>
  ),
  examples: {
    styling: `
      div{
        margin: 5px;
      }
    `,
    content: [
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
    command: 'npm i --save @mybit-ui/tooltip',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/tooltip',
    name: 'bitsrc',
  }],
  antReferences: [{
    name: 'Toolitp',
    url: 'https://ant.design/components/tooltip/',
  }],
};

export default DocumentedTooltip;
