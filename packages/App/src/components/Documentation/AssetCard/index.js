import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import AssetCard from '@pbteja-dev/ui.kit.asset-card';
import { Row, Col } from 'antd'
import demoImage from '../images/category-cryptocurrency-atm.png';
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/AssetCard/index.js"

const AssetCardPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>AssetCard <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p>A card with all important information about an Asset</p>

        <InstallationSection url={props.url} />

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={8} xs={24} sm={24} md={24} lg={12} xl={8}><Showcase data={expiredExample} /></Col>
            <Col span={8} xs={24} sm={24} md={24} lg={12} xl={8}><Showcase data={activeExample} /></Col>
            <Col span={8} xs={24} sm={24} md={24} lg={12} xl={8}><Showcase data={fundedExample} /></Col>
        </Row>

        <h1>Props</h1>
        <PropsTable data={assetTitleProps} />
    </div>
)

export default AssetCardPage

//expired example
const expiredExample = {
    component: (
        <div>
            <AssetCard 
                funded={"6120"}
                goal={"10000"} 
                city={"Sofia"} 
                country={"Bulgaria"} 
                name={"Bitcoin ATM"} 
                category={"#"}
                clickHandler={() => {}}
                id={"#"}
                backgroundImage={demoImage}
                fundingStage={"2"}
                pastDate={true}
            />
        </div>
    ),
    description: (
        <p>Asset card with expired status</p>
    ),
    code: `<AssetCard 
    funded={"6120"}
    goal={"10000"} 
    city={"Sofia"} 
    country={"Bulgaria"} 
    name={"Bitcoin ATM"} 
    category={"#"} 
    clickHandler={() => {}}
    id={"#"}
    backgroundImage={demoImage}
    fundingStage={"2"}
    pastDate={true}
/>`,
    display: 'inline-block'
}

const activeExample = {
    component: (
        <div>
            <AssetCard 
                funded={"3223"}
                goal={"10000"} 
                city={"Sofia"} 
                country={"Bulgaria"} 
                name={"Bitcoin ATM"} 
                category={"#"} 
                clickHandler={() => {}}
                id={"#"}
                backgroundImage={demoImage}
                fundingStage={"2"}
                pastDate={false}
            />
        </div>
    ),
    description: (
        <p>Asset card with active status</p>
    ),
    code: `<AssetCard 
    funded={"3223"}
    goal={"10000"} 
    city={"Sofia"} 
    country={"Bulgaria"} 
    name={"Bitcoin ATM"} 
    category={"#"} 
    clickHandler={() => {}}
    id={"#"}
    backgroundImage={demoImage}
    fundingStage={"2"}
    pastDate={false}
/>`,
    display: 'inline-block'
}

const fundedExample = {
    component: (
        <div>
            <AssetCard 
                funded={"1000"}
                goal={"10000"} 
                city={"Sofia"} 
                country={"Bulgaria"} 
                name={"Bitcoin ATM"} 
                category={"#"} 
                clickHandler={() => {}}
                id={"#"}
                backgroundImage={demoImage}
                fundingStage={"3"}
                pastDate={false}
            />
        </div>
    ),
    description: (
        <p>Asset card with funded status</p>
    ),
    code: `<AssetCard 
    funded={"1000"}
    goal={"10000"} 
    city={"Sofia"} 
    country={"Bulgaria"} 
    name={"Bitcoin ATM"} 
    category={"#"} 
    clickHandler={() => {}}
    id={"#"}
    backgroundImage={demoImage}
    fundingStage={"3"}
/>`,
    display: 'inline-block'
}

//props data
const assetTitleProps = [{
    key: '1',
    property: 'funded',
    description: 'how much money have been raised',
    type: 'string',
    required: 'true',
    default: '-'
},
{
    key: '2',
    property: 'goal',
    description: 'how much money are required to fully fund the asset',
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '3',
    property: 'city',
    description: 'in what city is the asset located',
    type: 'type',
    required: 'false',
    default: '-'
},{
    key: '4',
    property: 'country',
    description: 'in what country is the asset located',
    type: 'type',
    required: 'false',
    default: '-'
},{
    key: '5',
    property: 'name',
    description: 'the name of the asset',
    type: 'string',
    required: 'false',
    default: '-'
},{
    key: '6',
    property: 'category',
    description: 'the category of the asset (used to construct a part of the asset url)',
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '7',
    property: 'id',
    description: 'the id of the asset (used to construct a part of the asset url)',
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '8',
    property: 'backgroundImage',
    description: 'an image of the asset',
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '9',
    property: 'fundingStage',
    description: 'the funding stage of the asset',
    type: 'string: 1|2|3|4',
    required: 'true',
    default: '-'
},{
    key: '10',
    property: 'pastDate',
    description: 'shows if the asset has expired',
    type: 'boolean',
    required: 'true',
    default: '-'
}];
  