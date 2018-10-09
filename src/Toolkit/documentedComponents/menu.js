import { Theme, Menu } from '../../components/';

const DocumentedMenu = {
  component: (
    <div style={{ width: '100%', padding: '20px', background: '#555' }}>
      <Menu
        onClick={() => {}}
        selectedKeys={['Developer']}
        mode="horizontal"
        items={[
          {
            name: 'Developer',
            linkTo: 'https://mybit.io/developer',
            target: '_top',
          }, {
            name: 'Fund',
            linkTo: 'https://mybit.io/fund',
            target: '_top',
          }, {
            name: 'Applications',
            linkTo: 'https://mybit.io/applications',
            target: '_top',
          }, {
            name: 'Resources',
            iconRight: 'down',
            subNavigation: [
              {
                name: 'Tokensale',
                linkTo: '/first-resource',
                external: true,
              }, {
                name: 'Whitepaper',
                linkTo: 'https://files.mybit.io/files/MyBit_Whitepaper_v3.0.0.pdf',
                external: true,
              }, {
                name: 'Github',
                linkTo: 'https://github.com/MyBitFoundation',
                external: true,
              },
            ],
          }, {
            name: 'About',
            iconRight: 'down',
            subNavigation: [
              {
                name: 'Company',
                linkTo: 'https://mybit.io/about',
                target: '_top',
              }, {
                name: 'Token',
                linkTo: 'https://mybit.io/token',
                target: '_top',
              }, {
                name: 'Blog',
                linkTo: 'https://medium.com/mybit-dapp',
                external: true,
              },
            ],
          },
        ]}
        styling={Theme.menu}
        className="navigation--is-desktop"
      />
    </div>
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [],
  },
  usage: `<Menu
    onClick={() => {}}
    items={[
      {name: 'Home', linkTo: '', target: ''}
      {
        name: '', iconRight: 'down',
        subNavigation: [
          {name: '', linkTo: '', target: ''},
          {name: '', linkTo: '', target: ''}
        ]
      }
    ]}
    selectedKeys={['Home']}
    mode="horizontal"
  />`,
  theming: '',
  props: `
  styling: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  selectedKeys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  mode: PropTypes.string.isRequired,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/Menu',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/Menu',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedMenu;
