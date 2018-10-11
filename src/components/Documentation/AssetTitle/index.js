import React from 'react';
import { Showcase, EditPageLink, PlainCode, PropsTable } from '../../Common/';
import { AssetTitle } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Helmet } from "react-helmet";

const EDIT_PAGE_LINK = "/"

const AssetTitlePage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>AssetTitle <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>Asset title with location (MyBit GO)</p>

    <h1>Installation</h1>
    <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
}</PlainCode>
    <PlainCode>{`import { AssetTitle } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

    <h1>Examples</h1>
    <Showcase data={assetTitleExample} />

    <h1>Props</h1>
    <PropsTable data={assetTitleProps} />
</div>
)

export default AssetTitlePage

//example data
const assetTitleExample = {
    component: (
        <div>
            <AssetTitle 
                assetName={"Bitcoin ATM"}
                city={"Sofia"}
                country={"Bulgaria"}
            />
        </div>
    ),
    description: (
        <p>Name, country and city props are required</p>
    ),
    code: `<AssetTitle 
    assetName={"Bitcoin ATM"}
    city={"Sofia"}
    country={"Bulgaria"}
/>`,
    display: 'inline-block'
}

//props data
const assetTitleProps = [{
    key: '1',
    property: 'assetName',
    description: `the asset's name`,
    type: 'string',
    required: 'true',
    default: '-'
},
{
    key: '2',
    property: 'country',
    description: 'in what country is the asset located',
    type: 'string',
    required: 'true',
    default: '-'
},
{
    key: '3',
    property: 'city',
    description: 'in what city is the asset located',
    type: 'string',
    required: 'true/false',
    default: '-'
},{
    key: '4',
    property: 'className',
    description: 'class for custom styling',
    type: 'string',
    required: 'false',
    default: '-'
}];