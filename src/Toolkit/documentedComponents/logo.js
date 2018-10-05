import { Logo } from '../../components/';

const DocumentedLogo = {
  component: (
    <div style={{ backgroundColor: 'black', width: '200px' }}><Logo className="classname" /></div>
  ),
  examples: {
    content: [
      <div style={{ backgroundColor: 'black', width: '200px' }}><Logo className="classname" /></div>,
    ],
  },
  usage: `
  White SVG:
  <Logo className="classname" />

  With a background:
  <div style={{backgroundColor: 'black', width: '200px'}}>
    <Logo className="classname" />
  </div>
  `,
  theming: '',
  props: `
  className: PropTypes.string
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/logo',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/logo',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedLogo;
