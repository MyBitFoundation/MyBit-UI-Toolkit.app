import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import { PortfolioValueItem } from '../../../showcase'
import { Helmet } from "react-helmet";

const EDIT_PAGE_LINK = "/"

const PortfolioValueItemPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>PortfolioValueItem <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>A building block for TotalPortfolioRevenue on MyBit Go</p>

    <InstallationSection name="PortfolioValueItem" />

    <h1>Examples</h1>
    <Showcase data={revenueExample} />

    <h1>Props</h1>
    <PropsTable data={revenueProps} />
</div>
)

export default PortfolioValueItemPage

//example data
const revenueExample = {
    component: (
        <div>
            <div>
                <PortfolioValueItem
                    assetID={"asset-title-value"}
                    name={"Asset Title"}
                    ownership={'11.86'}
                    value={'196.68'}
                />
            </div>
        </div>
    ),
    description: (
        <p>desc</p>
    ),
    code: `<PortfolioValueItem
    assetID={"asset-title-value"}
    name={"Asset Title"}
    ownership={11.86}
    value={196.68}
  />`,
    display: 'inline-block'
}

//props data
const revenueProps = [{
    key: '1',
    property: 'assetID',
    description: `the id of the asset`,
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '2',
    property: 'name',
    description: `the name of the asset`,
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '3',
    property: 'ownership',
    description: `what percentage of the asset is owned`,
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '4',
    property: 'value',
    description: `what is the value of the ownership percentage`,
    type: 'string',
    required: 'true',
    default: '-'
}];