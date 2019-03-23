import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink } from '../../Common/';
import Button from '@pbteja-dev/ui.kit.button';
import { Helmet } from "react-helmet";

const ButtonsPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>Button <EditPageLink /></h1>
        <p>Used to trigger actions I suppose</p>

        <h1>Examples</h1>

        <Showcase data={firstExample} />

        <h1>2 columns</h1>
        <Row gutter={16}>
            <Col span={12}><Showcase data={firstExample} /></Col>
            <Col span={12}><Showcase data={firstExample} /></Col>
        </Row >

        <h1>3 columns</h1>
        <Row gutter={16}>
            <Col span={8}><Showcase data={firstExample} /></Col>
            <Col span={8}><Showcase data={firstExample} /></Col>
            <Col span={8}><Showcase data={firstExample} /></Col>
        </Row>

        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)

export default ButtonsPage

const str = `<div className="example-container">
    <div className="example-demo">
        <Button>Example</Button>
    </div>
    <Divider orientation="left" className="example-divider">Show code</Divider>
    <div className="example-code-notes">
    if needed
    </div>
    <div className="example-code-container">
        <CodeHighlighter code={str} />
    </div>
</div>`

const firstExample = {
    component: (
        <div>
            <Button type="solid" active={false}>Example Button</Button>
            <Button type="outline" active={false}>Example Button</Button>
        </div>
    ),
    description: (
        <p>description, notes or whatever that may be considered useful</p>
    ),
    code: str,
    display: 'inline-block'
}


const data = [{
    key: '1',
    property: 'width',
    description: 'specify the width of the component in pixels or percentage',
    type: 'string',
    required: 'True',
    default: '100%'
},{
    key: '2',
    property: 'height',
    description: 'specify the height of the component in pixels or percentage',
    type: 'string',
    required: 'False',
    default: '100%',
}];
