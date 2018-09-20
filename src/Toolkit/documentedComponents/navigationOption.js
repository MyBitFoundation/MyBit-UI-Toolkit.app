import { NavigationOption } from '../../components/';

const savedIcon = require('../../images/star.png');
const portfolioIcon = require('../../images/chart-area.png');
const transactionsIcon = require('../../images/history.png');

const DocumentedNavigationOption = {
    component: (
        <NavigationOption
            name={"Active"}
            icon={transactionsIcon}
            selectable={true}
            selected={true}
            url={"#"}
        />
    ),
    examples: {
        content: [
            <NavigationOption
                name={"Example 2"}
                icon={savedIcon}
                selectable={false}
                selected={false}
                url={"#"}
            />,
            <NavigationOption
                name={"Link"}
                icon={portfolioIcon}
                selectable={true}
                selected={false}
                url={"#"}
            />,
            <NavigationOption
                name={"Active"}
                icon={transactionsIcon}
                selectable={true}
                selected={true}
                url={"#"}
            />
        ],
    },
    usage: `
    <NavigationOption
        name={"Example 2"}
        icon={savedIcon}
        selectable={false}
        selected={false}
        url={"#"}
    />,
    <NavigationOption
        name={"Link"}
        icon={portfolioIcon}
        selectable={true}
        selected={false}
        url={"#"}
    />,
    <NavigationOption
        name={"Active"}
        icon={transactionsIcon}
        selectable={true}
        selected={true}
        url={"#"}
    />
  `,
    theming: '',
    props: `
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  url: PropTypes.string,
  `,
    sources: [{
        command: 'npm i --save @mybit-ui/navigationOption',
        name: 'npm',
    }, {
        command: 'bit i --save @mybit-ui/navigationOption',
        name: 'bitsrc',
    }],
};

export default DocumentedNavigationOption;
