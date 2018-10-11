import React from 'react';
import { Showcase, EditPageLink, PlainCode, PropsTable } from '../../Common/';
import { AssetInvestmentStatus } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Helmet } from "react-helmet";

const EDIT_PAGE_LINK = "/"

const AssetInvestmentStatusPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>AssetInvestmentStatus <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>Shows the money raised, the money required to fully fund the asset and the number of investors</p>

    <h1>Installation</h1>
    <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
}</PlainCode>
    <PlainCode>{`import { AssetInvestmentStatus } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

    <h1>Examples</h1>
    <Showcase data={assetInvestmentStatusExample} />

    <h1>Props</h1>
    <PropsTable data={assetInvestmentStatusProps} />
</div>
)

export default AssetInvestmentStatusPage

//example data
const assetInvestmentStatusExample = {
    component: (
        <div>
            <div>
                <AssetInvestmentStatus 
                    raised={"322.38 USD"}
                    goal={"$100,000.00"}
                    investors={3}
                />
            </div> 
        </div>
    ),
    description: (
        <p>An example with all props</p>
    ),
    code: `<AssetInvestmentStatus 
    raised={"322.38 USD"}
    goal={"$100,000.00"}
    investors={3}
/>`,
    display: 'inline-block'
}

//props data
const assetInvestmentStatusProps = [{
    key: '1',
    property: 'raised',
    description: `shows how much money have already been raised`,
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '1',
    property: 'goal',
    description: `shows how much money are required to fully fund the asset`,
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '1',
    property: 'investors',
    description: `shows how many people have invested in the asset`,
    type: 'number',
    required: 'false',
    default: 0
},{
    key: '4',
    property: 'className',
    description: `class for custom styling`,
    type: 'string',
    required: 'false',
    default: '-'
}];