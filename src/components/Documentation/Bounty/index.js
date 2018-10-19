import React from 'react';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common/';
import { Bounty } from '../../../showcase'
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/Bounty/index.js"

const firstExample = {
    component: (
        <div>
            <Bounty
                createdAt="2018-07-10T08:24:28Z"
                labels={['Bounty']}
                merged={false}
                mybitInUsd="1.21"
                repoName="MyBit-Go.website"
                repoUrl="https://github.com/MyBitFoundation/MyBit-Go.website"
                title="Reduce balance to only four decimals"
                tokenSymbol="MYB"
                url="https://github.com/MyBitFoundation/MyBit-Go.website/issues/48"
                value={50}
                showAmountInCrypto={false}
                />
        </div>
    ),
    description: (
        <p>Component to display active issues for a given github repository</p>
    ),
    code: `<Bounty
    createdAt="2018-07-10T08:24:28Z"
    labels={['Bounty']}
    merged={false}
    mybitInUsd="1.21"
    repoName="MyBit-Go.website"
    repoUrl="https://github.com/MyBitFoundation/MyBit-Go.website"
    title="Reduce balance to only four decimals"
    tokenSymbol="MYB"
    url="https://github.com/MyBitFoundation/MyBit-Go.website/issues/48"
    value={50}
    showAmountInCrypto={false}
/>`,
    display: 'inline-block'
}

const data = [{
    key: '1',
    property: 'title',
    description: 'Description of the issue',
    type: 'string',
    required: 'True',
},{
    key: '2',
    property: 'repoName',
    description: 'Name of the repository',
    type: 'string',
    required: 'True',
},{
    key: '3',
    property: 'repoUrl',
    description: 'Url to the repository',
    type: 'string',
    required: 'True',
},{
    key: '4',
    property: 'value',
    description: 'Prize value',
    type: 'number',
    required: 'True',
},{
    key: '5',
    property: 'createdAt',
    description: 'Creation date for the issue',
    type: 'string',
    required: 'True',
},{
    key: '6',
    property: 'url',
    description: 'Issue url',
    type: 'string',
    required: 'True',
}, {
    key: '7',
    property: 'labels',
    description: 'Array of labels for the issue',
    type: 'array',
    required: 'True',
}, {
    key: '8',
    property: 'tokenSymbol',
    description: 'Token symbol',
    type: 'string',
    required: 'True',
}, {
    key: '9',
    property: 'merged',
    description: 'Is the issue merged or not',
    type: 'boolean',
    required: 'True',
}, {
    key: '10',
    property: 'showAmountInCrypto',
    description: 'Show amount in crypto',
    type: 'boolean',
    required: 'True',
}, {
    key: '11',
    property: 'myBitInUsd',
    description: 'Exchange rate from crypto to USD',
    type: 'string',
    required: 'True',
},
];

const ButtonsPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>Bounty <EditPageLink editLink={EDIT_PAGE}/></h1>
        <p></p>
        <InstallationSection url="Bounty" />

        <h1>Examples</h1>

        <Showcase data={firstExample} />

        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)

export default ButtonsPage






