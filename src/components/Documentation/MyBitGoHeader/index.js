import React from 'react';
import { Showcase, EditPageLink, PlainCode, PropsTable } from '../../Common/';
import { MyBitGoHeader } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'

const EDIT_PAGE_LINK = "/"

const MyBitGoHeaderPage = () => (
    <div>
    <h1>MyBitGoHeader <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>MyBitGo header</p>

    <h1>Installation</h1>
    <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
}</PlainCode>
    <PlainCode>{`import { MyBitGoHeader } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

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
        <p>dasdasd</p>
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