import { AccountInfo } from '../../components/';

const DocumentedAccountInfo = {
  component: (
    <AccountInfo myBitBalance="20" ethBalance="8" userName="0xDA2F8123" />
  ),
  examples: {
    content: [
      <AccountInfo myBitBalance="20" ethBalance="8" userName="0xDA2F8123" />,
      <AccountInfo myBitBalance="20" ethBalance="8" />,
      <AccountInfo myBitBalance="20" userName="0xDA2F8123" />,
      <AccountInfo />,
    ],
  },
  usage: `
  Example 1 with all props:
  <AccountInfo myBitBalance="20" ethBalance="8" userName="0xDA2F8123" />

  Example 2 with missing userName prop:
  <AccountInfo myBitBalance="20" ethBalance="8" />

  Example 3 with missing ethBalance prop:
  <AccountInfo myBitBalance="20" userName="0xDA2F8123" />

  Example 4 with no props:
  <AccountInfo />
  `,
  theming: '',
  props: `
  myBitBalance: PropTypes.string,
  ethBalance: PropTypes.string,
  userName: PropTypes.string,
  addressClassName: PropTypes.string //attaches a className to the address component
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/address',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/address',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedAccountInfo;
