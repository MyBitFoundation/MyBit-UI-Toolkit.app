import { MyBitGoHeader } from '../../components/';

const DocumentedMyBitGoHeader = {
  component: (
    <MyBitGoHeader
      prices={{ mybitPrice: 0.05 }}
      user={{
                myBitBalance: '100',
                ethBalance: 1000,
                userName: '0xd12cd8a37f074e7eafae618c986ff825666198bd',
            }}
    />
  ),
  examples: {
    content: [
      <MyBitGoHeader
        key="example1"
        prices={{ mybitPrice: 0.05 }}
        user={{
                    myBitBalance: '100',
                    ethBalance: 1000,
                    userName: '0xd12cd8a37f074e7eafae618c986ff825666198bd',
                }}
      />,
      <MyBitGoHeader
        key="example2"
        user={{
                    myBitBalance: '100',
                    ethBalance: 1000,
                    userName: '0xd12cd8a37f074e7eafae618c986ff825666198bd',
                }}
      />,
      <MyBitGoHeader
        key="example3"
        user={{
                    myBitBalance: '100',
                    ethBalance: 1000,
                }}
      />,
      <MyBitGoHeader
        key="example4"
        user={{
                    myBitBalance: '100',
                }}
      />,
    ],
  },
  usage: `
    <MyBitGoHeader 
        prices={{ mybitPrice: 0.05 }}
        user={{
            myBitBalance: 100,
            ethBalance: 1000,
            userName: '0xd12cd8a37f074e7eafae618c986ff825666198bd',
        }} 
    />
    `,
  theming: '',
  props: `
    prices: PropTypes.shape({ params: PropTypes.object }).isRequired,
    user: PropTypes.shape({ params: PropTypes.object }).isRequired,
     `,
  sources: [{
    command: 'npm i --save @mybit-ui/myBitGoHeader',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/myBitGoHeader',
    name: 'bitsrc',
  }],
};

export default DocumentedMyBitGoHeader;
