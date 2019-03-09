import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection, Playground } from '../../Common';
import Filter from '@pbteja-dev/ui.kit.filter';

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/Filter/index.js"

const styling = {
    checkedColor: '#1890ff',
    checkedBackgroundColor: '#e6f7ff',
    checkedBorderColor: '#91d5ff',
    uncheckedBackgroundColor: 'transparent',
    uncheckedBorderColor: 'transparent',
    uncheckedColor: 'rgba(0, 0, 0, 0.65)',
    hoverColor: '#1890ff'
  }

const filterExample = {
    component: (
        <div>
            {['filterOne', 'filterTwo (checked)', 'filterThree' ].map((filter, i) => (
                <Filter key={filter} checked={i===1}>{filter}</Filter>
            ))}
        </div>
    ),
    description: (
        <p>Sample filters</p>
    ),
    code: `<Filter>Filter one</Filter>`,
    display: 'inline-block'
}


const data = [{
    key: '1',
    property: 'checked',
    description: 'Checked status of Tag',
    type: 'boolean',
    required: 'false',
    default: 'false'
},{
    key: '2',
    property: 'styling',
    description: 'Optional styling',
    type: "object",
    required: 'False',
    default: '{}'
},{
    key: '3',
    property: 'onChange',
    description: 'Callback executed when Tag is checked/unchecked',
    type: "function",
    required: 'false',
    default: '-'
}
];

export default (props) => (
    <div>
        <h1>{props.title} <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p></p>
        <InstallationSection name={props.title} url={props.url} />
        <Playground component={(props) => (
            <React.Fragment>
                <Filter {...props} checked={true}>Checked filter</Filter>
                <Filter {...props} checked={false}>Unchecked filter</Filter>
            </React.Fragment>
        )} styling={styling}/>
        <h2>Examples</h2>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Sample filters</h3>
                <Showcase data={filterExample} />
            </Col>
        </Row>


        <h2>Props</h2>
        <PropsTable data={data} />

    </div>
)





