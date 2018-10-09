import { Button } from '../../components/';

const DocumentedButton = {
  component: (
    <Button>
      Sample button
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
        type="solid"
        color="green"
        size="small"
        key="button-example-1"
      >
        Small primary green button
      </Button>,
      <Button
        size="large"
        key="button-example-2"
      >
        Large secondary button
      </Button>,
      <Button
        disabled
        key="button-example-3"
      >
        Disabled button
      </Button>,
      <Button
        active
        key="button-example-4"
      >
        Active button
      </Button>,
      <Button
        type="solid"
        shape="circle"
        icon="search"
        key="button-example-5"
      />,
    ],
  },
  usage:
    `
  <Button type="solid" size="medium">
    This is our button
  </Button>
  `,
  theming: `
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
  props: `
    styling: PropTypes.object,
    shape: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default', 'large']),
    color: PropTypes.oneOf(['blue', 'green']),
    type: PropTypes.oneOf(['solid', 'outline']),
    active: PropTypes.bool,
    loading: PropTypes.bool
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
