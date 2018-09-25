import { Address } from '../../components/';

const DocumentedAddress = {
  component: (
    <Address userName="0x79141F079141FA" className="classname" />
  ),
  examples: {
    content: [
      <Address userName="0xA91BDAF22" className="classname" />,
      <Address className="classname" />,
    ],
  },
  usage: `
  <Address userName="0xA91BDAF22" className="classname" />
  `,
  theming: '',
  props: `
  userName: PropTypes.string,
  className: PropTypes.string,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/address',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/address',
    name: 'bitsrc',
  }],
};

export default DocumentedAddress;
