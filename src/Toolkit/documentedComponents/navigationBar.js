import { NavigationBar } from '../../components/';

const exploreIcon = require('../../images/search.png');
const portfolioIcon = require('../../images/chart-area.png');
const transactionsIcon = require('../../images/history.png');
const savedIcon = require('../../images/star.png');
const listAssetIcon = require('../../images/plus.png');
const stakingIcon = require('../../images/cubes.png');
const exchangeIcon = require('../../images/exchange-alt.png');
const knowledgeBaseIcon = require('../../images/question.png');

const menuOptions = [
  {
    name: 'Explore',
    icon: exploreIcon,
    selectable: true,
    url: '/',
  },
  {
    name: 'Portfolio',
    icon: portfolioIcon,
    selectable: true,
    url: '/portfolio',
  },
  {
    name: 'Transactions',
    icon: transactionsIcon,
    selectable: true,
    url: '/transaction-history',
  },
  { name: 'Saved', icon: savedIcon },
  { name: 'List Asset', icon: listAssetIcon },
  { name: 'Staking', icon: stakingIcon },
  { name: 'Exchange', icon: exchangeIcon },
  {
    name: 'Help',
    icon: knowledgeBaseIcon,
    selectable: true,
    url: '/help',
  },
];


const DocumentedNavigationBar = {
  component: (
    <NavigationBar
      menuOptions={menuOptions}
      clickHandler={() => {}}
      currentPath="/portfolio"
    />
  ),
  examples: {
    content: [

    ],
  },
  usage: `
    const menuOptions = [
        {
          name: 'Explore',
          icon: exploreIcon,
          selectable: true,
          url: '/',
        },
        {
          name: 'Portfolio',
          icon: portfolioIcon,
          selectable: true,
          url: '/portfolio',
        },
        {
          name: 'Transactions',
          icon: transactionsIcon,
          selectable: true,
          url: '/transaction-history',
        },
        { name: 'Saved', icon: savedIcon },
        { name: 'List Asset', icon: listAssetIcon },
        { name: 'Staking', icon: stakingIcon },
        { name: 'Exchange', icon: exchangeIcon },
        {
          name: 'Help',
          icon: knowledgeBaseIcon,
          selectable: true,
          url: '/help',
        },
    ];
    <NavigationBar 
        menuOptions={menuOptions} 
        clickHandler={() => {}} 
        currentPath={"/portfolio"} 
    />
  `,
  theming: '',
  props: `
    clickHandler: PropTypes.func,
    currentPath: PropTypes.string.isRequired,
    menuOptions: PropTypes.array.isRequired
    `,
  sources: [{
    command: 'npm i --save @mybit-ui/navigationBar',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/navigationBar',
    name: 'bitsrc',
  }],
};

export default DocumentedNavigationBar;
