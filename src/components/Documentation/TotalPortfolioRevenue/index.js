import React from 'react';
import { Showcase, EditPageLink, PlainCode, PropsTable } from '../../Common/';
import { TotalPortfolioRevenue } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Row, Col } from 'antd'
import { Helmet } from "react-helmet";

const EDIT_PAGE_LINK = "/"

const PortfolioValueItemPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>TotalPortfolioValue <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>Displays the total value of a list of assets</p>

    <h1>Installation</h1>
    <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
}</PlainCode>
    <PlainCode>{`import { TotalPortfolioValue } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

    <h1>Examples</h1>
    <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}><Showcase data={withContent} /></Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}><Showcase data={withoutContent} /></Col>
    </Row >
    

    <h1>Props</h1>
    <PropsTable data={revenueProps} />
</div>
)

export default PortfolioValueItemPage

//example data
const withoutContent = {
    component: (
        <div>
            <TotalPortfolioRevenue totalPortfolioRevenue={"0"} portfolioRevenueAssets={[]} />
        </div>
    ),
    description: (
        <p>desc</p>
    ),
    code: `<TotalPortfolioRevenue totalPortfolioRevenue={"0"} portfolioRevenueAssets={[]} />`,
    display: 'inline-block'
}

const assets = [
    {
        assetID: 'asset-id-1',
        name: 'Example Asset',
        monthlyRevenue: 500.92,
        totalRevenue: 14081.25
    },
    {
        assetID: 'asset-id-2',
        name: 'Example Asset 2',
        monthlyRevenue: 10.92,
        totalRevenue: 181.36
    },
    {
        assetID: 'asset-id-3',
        name: 'Example Asset 3',
        monthlyRevenue: 12.42,
        totalRevenue: 81.16
    }
]

const withContent = {
    component: (
        <div>
            <TotalPortfolioRevenue totalPortfolioRevenue={"12234"} portfolioRevenueAssets={assets} />
        </div>
    ),
    description: (
        <p>desc</p>
    ),
    code: `const assets = [
    {
        assetID: 'asset-id-1',
        name: 'Example Asset',
        monthlyRevenue: '500.92',
        totalRevenue: '14081.25'
    },
    {
        assetID: 'asset-id-2',
        name: 'Example Asset 2',
        monthlyRevenue: '10.92',
        totalRevenue: '181.36'
    },
    {
        assetID: 'asset-id-3',
        name: 'Example Asset 3',
        monthlyRevenue: '12.42',
        totalRevenue: '81.16'
    }
]
<TotalPortfolioRevenue totalPortfolioRevenue={"12234"} portfolioRevenueAssets={assets} />`,
    display: 'inline-block'
}

//props data
const revenueProps = [{
    key: '1',
    property: 'totalPortfolioRevenue',
    description: `the total revenue of the portfolio`,
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '2',
    property: 'portfolioRevenueAssets',
    description: `information about all assets`,
    type: 'object[]: {assetID: string, name: string, monthlyRevenue: number, totalRevenue: number}',
    required: 'true',
    default: '-'
}];