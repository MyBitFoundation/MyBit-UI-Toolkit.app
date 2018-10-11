import React from 'react'
import { AccountInfo } from '../../../showcase'
import { Showcase, EditPageLink, CustomTag, PlainCode, PropsTable } from '../../Common/';
import { Row, Col } from 'antd'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'

const AccountInfoPage = () => (
    <div>
    <h1>AccountInfo <EditPageLink editLink="/" /></h1>
    <p>Displays the current MYB and ETH balance of the user.</p>

    <h1>Installation</h1>
    <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
}</PlainCode>
    <PlainCode>{`import { AccountInfo } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

    <h1>Examples</h1>
    
    <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Showcase data={allProps} />
            <Showcase data={withoutBalance} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Showcase data={withoutUsername} />
            <Showcase data={withoutProps} />
        </Col>
    </Row >

    <h1>Props</h1>
    <PropsTable data={AccountInfoPropsData} />
</div>
)

export default AccountInfoPage

const AccountInfoPropsData = [{
    key: '1',
    property: 'myBitBalance',
    description: 'current MYB balance of the user',
    type: 'string',
    required: 'false',
    default: '0'
},
{
    key: '2',
    property: 'ethBalance',
    description: 'current ETH balance of the user',
    type: 'string',
    required: 'false',
    default: `''`
},{
    key: '3',
    property: 'userName',
    description: 'the username of the user',
    type: 'string',
    required: 'false',
    default: `''`
}];

//example with all props
const allProps = {
    component: (
        <div>
            <div><AccountInfo myBitBalance="20" ethBalance="8" userName="0xDA2F8123" /></div>
        </div>
    ),
    description: (
        <p>AccountInfo with all props</p>
    ),
    code: `<AccountInfo myBitBalance="20" ethBalance="8" userName="0xDA2F8123" /> `,
    display: 'block'
}

//example without username
const withoutUsername = {
    component: (
        <div>
            <div><AccountInfo myBitBalance="20" ethBalance="8" /></div>
        </div>
    ),
    description: (
        <p>AccountInfo without <CustomTag>userName</CustomTag> prop</p>
    ),
    code: `<AccountInfo myBitBalance="20" ethBalance="8" />`,
    display: 'block'
}

//example without balance
const withoutBalance = {
    component: (
        <div>
            <div><AccountInfo myBitBalance="20" userName="0xDA2F8123" /></div>
        </div>
    ),
    description: (
        <p>AccountInfo without <CustomTag>ethBalance</CustomTag> prop</p>
    ),
    code: `<AccountInfo myBitBalance="20" userName="0xDA2F8123" />`,
    display: 'block'
}

//example without any props
const withoutProps = {
    component: (
        <div>
            <div><AccountInfo /></div>
        </div>
    ),
    description: (
        <p>AccountInfo without props</p>
    ),
    code: `<AccountInfo />`,
    display: 'block'
}