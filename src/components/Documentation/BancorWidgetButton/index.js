import React from 'react';
import { Showcase, EditPageLink, PlainCode, PropsTable } from '../../Common/';
import { BancorWidgetButton } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Helmet } from "react-helmet";

const EDIT_PAGE_LINK = "/"

const BancorWidgetButtonPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>Bancor Widget Button <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
        <p>Displays a modal which allows users to buy or sell MYB</p>

        <h1>Installation</h1>
        <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
        }</PlainCode>
        <PlainCode>{`import { BancorWidgetButton } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

        <h1>Examples</h1>
        <Showcase data={logoExample} />

        <h1>Props</h1>
        <PropsTable data={logoProps} />
    </div>
)

export default BancorWidgetButtonPage

//example data
const logoExample = {
    component: (
        <div>
            <BancorWidgetButton
                type={1}
                baseCurrencyId="5b164627ae2482321708eb93"
                pairCurrencyId="5937d635231e97001f744267"
                primaryColor="#1890ff"
                displayCurrency="ETH"
                operation="buy"
            >
                Custom Title
            </BancorWidgetButton>
            <BancorWidgetButton />
        </div>
    ),
    description: (
        <p>Examples for a button with a custom title and a default button without any passed props</p>
    ),
    code: `//custom title
<BancorWidgetButton
    type={1}
    baseCurrencyId="5b164627ae2482321708eb93"
    pairCurrencyId="5937d635231e97001f744267"
    primaryColor="#1890ff"
    displayCurrency="ETH"
    operation="buy"
>
    Custom Title
</BancorWidgetButton>

//default use
<BancorWidgetButton />
`,
    display: 'inline-block'
}

//props data
const logoProps = [
    {
        key: '0',
        property: 'children',
        description: `-`,
        type: 'component content string',
        required: 'false',
        default: 'Buy MYB here'
    },
    {
        key: '1',
        property: 'type',
        description: `-`,
        type: 'number',
        required: 'false',
        default: '1'
    },
    {
        key: '2',
        property: 'baseCurrencyId',
        description: `-`,
        type: 'string',
        required: 'false',
        default: '5b164627ae2482321708eb93'
    },
    {
        key: '3',
        property: 'pairCurrencyId',
        description: `-`,
        type: 'string',
        required: 'false',
        default: '5937d635231e97001f744267'
    },
    {
        key: '4',
        property: 'primaryColor',
        description: `-`,
        type: 'string',
        required: 'false',
        default: '#1890ff'
    },
    {
        key: '5',
        property: 'displayCurrency',
        description: `-`,
        type: 'string',
        required: 'false',
        default: 'ETH'
    },
    {
        key: '6',
        property: 'operation',
        description: `-`,
        type: `string: oneOf['buy', 'sell']`,
        required: 'false',
        default: 'buy'
    }];