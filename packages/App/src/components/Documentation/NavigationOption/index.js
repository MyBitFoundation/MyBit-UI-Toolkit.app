import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import NavigationOption from '@pbteja-dev/ui.kit.navigation-option';
import { Row, Col } from 'antd'
import { Helmet } from "react-helmet";

import savedIcon from '../images/star.png'
import portfolioIcon from '../images/chart-area.png'
import transactionsIcon from '../images/history.png'

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/NavigationOption/index.js"

const NavigationOptionPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>NavigationOption <EditPageLink editLink={EDIT_PAGE} /></h1>
    <p>A single NavigationOption part of the Navigation component for MyBitGo</p>

    <InstallationSection url={props.url} />

    <h1>Examples</h1>
    <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}><Showcase data={notSelectable} /></Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}><Showcase data={selected} /></Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}><Showcase data={notSelected} /></Col>
    </Row>

    <h1>Props</h1>
    <PropsTable data={navigationOptioneProps} />
</div>
)

export default NavigationOptionPage

//example data
const notSelectable = {
    component: (
        <div>
            <NavigationOption
                name={"Not Selectable"}
                icon={savedIcon}
                selectable={false}
                selected={false}
                url={"#"}
            />
        </div>
    ),
    description: (
        <p>Not selectable navigation option</p>
    ),
    code: ` <NavigationOption
    name={"Not Selectable"}
    icon={savedIcon}
    selectable={false}
    selected={false}
    url={"#"}
/>`,
    display: 'inline-block'
}

//example data
const selected = {
    component: (
        <div>
            <NavigationOption
                name={"Selected"}
                icon={transactionsIcon}
                selectable={true}
                selected={true}
                url={"#"}
            />
        </div>
    ),
    description: (
        <p>Selected/active navigation option</p>
    ),
    code: `<NavigationOption
    name={"Selected"}
    icon={transactionsIcon}
    selectable={true}
    selected={true}
    url={"#"}
/>`,
    display: 'inline-block'
}

//example data
const notSelected = {
    component: (
        <div>
            <NavigationOption
                name={"Not Selected"}
                icon={portfolioIcon}
                selectable={true}
                selected={false}
                url={"#"}
            />
        </div>
    ),
    description: (
        <p>Selectable but not selected navigation option</p>
    ),
    code: `<NavigationOption
    name={"Not Selected"}
    icon={portfolioIcon}
    selectable={true}
    selected={false}
    url={"#"}
/>`,
    display: 'inline-block'
}

//props data
const navigationOptioneProps = [{
    key: '1',
    property: 'name',
    description: `the title of the navigation option`,
    type: 'string',
    required: 'true',
    default: '-'
},
{
    key: '2',
    property: 'icon',
    description: 'the icon of the navigation option',
    type: 'string',
    required: 'true',
    default: '-'
},
{
    key: '3',
    property: 'selectable',
    description: 'whether the navigation option is selectable or disabled',
    type: 'boolean',
    required: 'false',
    default: 'false'
},{
    key: '4',
    property: 'selected',
    description: 'whether the navigation option is active or not',
    type: 'boolean',
    required: 'false',
    default: 'false'
},{
    key: '5',
    property: 'url',
    description: 'the url of the navigation option',
    type: 'string',
    required: 'false',
    default: '-'
}];