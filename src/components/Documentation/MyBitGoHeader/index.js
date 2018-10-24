import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import { MyBitGoHeader } from '../../../showcase'
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/MyBitGoHeader/index.js"

const MyBitGoHeaderPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>MyBitGoHeader <EditPageLink editLink={EDIT_PAGE} /></h1>
    <p>MyBitGo header</p>

    <InstallationSection url="MyBitGoHeader" />

    <h1>Examples</h1>
    <Showcase data={headerExample} />

    <h1>Props</h1>
    <PropsTable data={headerProps} />
</div>
)

export default MyBitGoHeaderPage

//example data
const headerExample = {
    component: (
        <div>
            <div>
                <MyBitGoHeader 
                    prices={{ mybitPrice: 0.05 }}
                    user={{
                        myBitBalance: '100',
                        ethBalance: '1000',
                        userName: '0xd12cd8a37f074e7eafae618c986ff825666198bd',
                    }} 
                />
            </div>
        </div>
    ),
    description: (
        <p>The header of MyBit Go</p>
    ),
    code: `<MyBitGoHeader 
    prices={{ mybitPrice: 0.05 }}
    user={{
        myBitBalance: 100,
        ethBalance: 1000,
        userName: '0xd12cd8a37f074e7eafae618c986ff825666198bd',
    }} 
/>`,
    display: 'block'
}

//props data
const headerProps = [{
    key: '1',
    property: 'prices',
    description: `the price of MYB`,
    type: 'object { mybitPrice: number }',
    required: 'true',
    default: '-'
},{
    key: '2',
    property: 'user',
    description: `information for the user`,
    type: `object { myBitBalance: number,
        ethBalance: number,
        userName: string }`,
    required: 'true',
    default: '-'
}];