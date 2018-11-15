import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import { TotalPortfolioValue } from '../../../showcase'
import { Row, Col } from 'antd'
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/TotalPortfolioValue/index.js"

const PortfolioValueItemPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>TotalPortfolioValue <EditPageLink editLink={EDIT_PAGE} /></h1>
    <p>Displays the total value of a list of assets</p>

    <InstallationSection url={props.url} />

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
            <TotalPortfolioValue totalPortfolioValue={"0"} portfolioValueAssets={[]} />
        </div>
    ),
    description: (
        <p>desc</p>
    ),
    code: `<TotalPortfolioValue totalPortfolioValue={"0"} portfolioValueAssets={[]} />`,
    display: 'inline-block'
}

const valueAssets = [
    {
        assetID: 'asset-id-1',
        name: 'Example Asset',
        ownership: '22',
        value: '14081.25'
    },
    {
        assetID: 'asset-id-2',
        name: 'Example Asset 2',
        ownership: '22',
        value: '14081.25'
    },
    {
        assetID: 'asset-id-3',
        name: 'Example Asset 3',
        ownership: '22',
        value: '14081.25'
    }
]

const withContent = {
    component: (
        <div>
            <TotalPortfolioValue totalPortfolioValue={"12234"} portfolioValueAssets={valueAssets} />
        </div>
    ),
    description: (
        <p>desc</p>
    ),
    code: `const valueAssets = [
    {
        assetID: 'asset-id-1',
        name: 'Example Asset',
        ownership: '22',
        value: '14081.25'
    },
    {
        assetID: 'asset-id-2',
        name: 'Example Asset 2',
        ownership: '22',
        value: '14081.25'
    },
    {
        assetID: 'asset-id-3',
        name: 'Example Asset 3',
        ownership: '22',
        value: '14081.25'
    }
]
<TotalPortfolioValue totalPortfolioValue={"12234"} portfolioValueAssets={valueAssets} />`,
    display: 'inline-block'
}

//props data
const revenueProps = [{
    key: '1',
    property: 'totalPortfolioValue',
    description: `the total value of the portfolio`,
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '2',
    property: 'portfolioValueAssets',
    description: `information about all assets`,
    type: 'object[]: {assetID: string, name: string, ownership: string, value: string}',
    required: 'true',
    default: '-'
}];