import { ExchangeRate } from '../../components/';

const DocumentedExchangeRate = {
  component: (
    <ExchangeRate mybitPrice={0.321} USD_MYB_SYMBOL={"MYB/USD"} />
  ),
  examples: {
    content: [
        <ExchangeRate mybitPrice={0.321} USD_MYB_SYMBOL={"MYB/USD"} />,
        <ExchangeRate />
    ],
  },
  usage: `
  With all props:
  <ExchangeRate mybitPrice={0.321} USD_MYB_SYMBOL={"MYB/USD"} />

  USD_MYB_SYMBOL is "MYB/USD" by default:
  <ExchangeRate mybitPrice={0.321} />

  If mybitPrice is not passed, it will render a spinner instead:
  <ExchangeRate />
  `,
  theming: '',
  props: `
  mybitPrice: PropTypes.number,
  USD_MYB_SYMBOL: PropTypes.string
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/exchangeRate',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/exchangeRate',
    name: 'bitsrc',
  }],
};

export default DocumentedExchangeRate;