import React from 'react'
import AnimatedLogo from '@pbteja-dev/ui.kit.animated-logo';
import { Showcase, EditPageLink, PropsTable, InstallationSection } from '../../Common/';
import { Row, Col } from 'antd'
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/AnimatedLogo/index.js"

const AnimatedLogoPropsData = [{
    key: '1',
    property: 'size',
    description: 'size of the logo (both width and height)',
    type: 'string',
    required: 'false',
    default: '100px'
},
{
    key: '2',
    property: 'primaryColor',
    description: 'color of the upper part of the logo',
    type: 'string',
    required: 'false',
    default: '#001358'
},{
    key: '3',
    property: 'secondaryColor',
    description: 'color of the lower part of the logo',
    type: 'string',
    required: 'false',
    default: 'rgb(24, 144, 255)'
},{
    key: '4',
    property: 'animationSpeed',
    description: 'how long should it take for the animation to run',
    type: 'string',
    required: 'false',
    default: '2200ms'
},{
    key: '5',
    property: 'animationIterationCount',
    description: 'how many times should animation run',
    type: 'string',
    required: 'false',
    default: 'Infinite'
}];

const AnimatedLogoPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>AnimatedLogo <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p>Displays animated MyBit Logo</p>

        <InstallationSection url={props.url} />

        <h1>Examples</h1>
        
        <Row gutter={16}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Showcase data={defaultLogo} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Showcase data={customLogo} />
            </Col>
        </Row >

        <h1>Props</h1>
        <PropsTable data={AnimatedLogoPropsData} />
    </div>
)

export default AnimatedLogoPage



//example with all props
const defaultLogo = {
    component: (
        <div>
            <div><AnimatedLogo/></div>
        </div>
    ),
    description: (
        <p>Animated Logo with default props</p>
    ),
    code: `<AnimatedLogo/> `,
    display: 'block'
}

//example without username
const customLogo = {
    component: (
        <div>
            <div style={{marginTop: 36, marginBottom: 36}}><AnimatedLogo size="60px" primaryColor="red" secondaryColor="green" animationIterationCount="1"/></div>
        </div>
    ),
    description: (
        <p>Animated Logo with custom props</p>
    ),
    code: `<AnimatedLogo size="60px" primaryColor="red" secondaryColor="green" animationIterationCount="1"/>`,
    display: 'block'
}
