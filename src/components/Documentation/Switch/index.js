import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common';
import { Tooltip } from '../../../showcase'

const tooltipExample = {
    component: (
        <div>
            <Tooltip title="prompt text">
              <span>Tooltip will show when mouse enter.</span>
            </Tooltip>
        </div>
    ),
    description: (
        <p>Tooltip example</p>
    ),
    code: `
    <Tooltip title="prompt text">
      <span>Tooltip will show when mouse enter.</span>
    </Tooltip>
    `,
    display: 'inline-block'
}


const data = [
    {
       "key": 1,
       "property": "title",
       "description": "Tooltip text",
       "type": "string",
       "required": "False",
       "default": "-"
    }, {
        "key": 2,
        "property": "arrowPointAtCenter",
        "description": "Whether the arrow is pointed at the center of target",
        "type": "boolean",
        "required": "False",
        "default": "false"
    }, {
        "key": 3,
        "property": "placement",
        "description": "The position of the tooltip relative to the target, which can be one of top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom",
        "type": "string",
        "required": "False",
        "default": "top"
    }
 ];

export default () => (
    <div>
        <h1>Tooltip <EditPageLink /></h1>
        <p></p>
        <InstallationSection name="Tooltip" />

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Tooltip example</h3>
                <Showcase data={tooltipExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)
