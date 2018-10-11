import React from 'react';
import { Showcase, EditPageLink, PlainCode, PropsTable } from '../../Common/';
import { NavigationOption } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Row, Col } from 'antd'

import savedIcon from '../images/star.png'
import portfolioIcon from '../images/chart-area.png'
import transactionsIcon from '../images/history.png'

const EDIT_PAGE_LINK = "/"

const NavigationOptionPage = () => (
    <div>
    <h1>NavigationOption <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>A single NavigationOption part of the Navigation component for MyBitGo</p>

    <h1>Installation</h1>
    <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
}</PlainCode>
    <PlainCode>{`import { NavigationOption } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

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