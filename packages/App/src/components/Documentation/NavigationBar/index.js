import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import NavigationBar from '@pbteja-dev/ui.kit.navigation-bar';
import { Helmet } from "react-helmet";

import exploreIcon from '../images/search.png';
import portfolioIcon from '../images/chart-area.png';
import transactionsIcon from '../images/history.png';
import savedIcon from '../images/star.png';
import listAssetIcon from '../images/plus.png';
import stakingIcon from '../images/cubes.png';
import exchangeIcon from '../images/exchange-alt.png';
import knowledgeBaseIcon from '../images/question.png';

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

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/NavigationBar/index.js"

const NavigationBarPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>NavigationBar <EditPageLink editLink={EDIT_PAGE} /></h1>
    <p>The navigation used on MyBit Go</p>

   <InstallationSection url={props.url} />

    <h1>Examples</h1>
    <Showcase data={navExample} />

    <h1>Props</h1>
    <PropsTable data={navProps} />
</div>
)

export default NavigationBarPage

//example data
const navExample = {
    component: (
        <div>
            <div style={{width: '90%'}}>
                <NavigationBar
                    menuOptions={menuOptions}
                    clickHandler={() => {}}
                    currentPath="/portfolio"
                />
            </div>
        </div>
    ),
    description: (
        <p>The NavigationBar takes the full width of its container</p>
    ),
    code: `const menuOptions = [
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
<div style={{width: '90%'}}>
    <NavigationBar
        menuOptions={menuOptions}
        clickHandler={() => {}}
        currentPath="/portfolio"
    />
</div>`,
    display: 'inline-block'
}

//props data
const navProps = [{
    key: '1',
    property: 'clickHandler',
    description: `-`,
    type: 'function',
    required: 'false',
    default: '-'
},{
    key: '2',
    property: 'currentPath',
    description: `required in order to determine which button is active`,
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '3',
    property: 'menuOptions',
    description: `all data to construct the NavigationBar`,
    type: 'object: {name: string, icon: string, selectable: boolean, url: string}',
    required: 'true',
    default: '-'
}];