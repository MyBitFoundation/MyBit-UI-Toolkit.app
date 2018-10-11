import React from 'react';
import { Showcase, EditPageLink, PlainCode, PropsTable } from '../../Common/';
import { ExchangeRate } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Col, Row } from 'antd'
import { Helmet } from "react-helmet";

const EDIT_PAGE_LINK = "/"

const ExchangeRatePage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>ExchangeRate <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>Displays the price of MYB in USD</p>

    <h1>Installation</h1>
    <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
}</PlainCode>
    <PlainCode>{`import { ExchangeRate } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

    <h1>Examples</h1>
    <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}><Showcase data={allProps} /></Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}><Showcase data={noPriceProp} /></Col>
    </Row >
    

    <h1>Props</h1>
    <PropsTable data={assetTitleProps} />
</div>
)

export default ExchangeRatePage

const allProps = {
    component: (
        <div>
            <ExchangeRate mybitPrice={0.321} USD_MYB_SYMBOL={"USD/MYB"} />
        </div>
    ),
    description: (
        <p>An example with all props</p>
    ),
    code: `<ExchangeRate mybitPrice={0.321} USD_MYB_SYMBOL={"USD/MYB"} />`,
    display: 'inline-block'
}

const noPriceProp = {
    component: (
        <div>
            <ExchangeRate />
        </div>
    ),
    description: (
        <p>A loader will appear if mybitPrice is not passed</p>
    ),
    code: `<ExchangeRate />`,
    display: 'inline-block'
}

//props data
const assetTitleProps = [{
    key: '1',
    property: 'mybitPrice',
    description: `the price of MYB in USD`,
    type: 'number',
    required: 'false',
    default: '-'
},
{
    key: '2',
    property: 'USD_MYB_SYMBOL',
    description: 'a symbol to represent the price ratio',
    type: 'string',
    required: 'false',
    default: 'USD/MYB'
}];