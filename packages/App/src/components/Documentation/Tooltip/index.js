import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common';
import Tooltip from '@pbteja-dev/ui.kit.tooltip';

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/Tooltip/index.js"

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
    code: `<Tooltip title="prompt text">
    <span>Tooltip will show when mouse enter.</span>
</Tooltip>`,
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


export default (props) => (
    <div>
        <h1>Tooltip <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p></p>
        <InstallationSection url={props.url} />
        <h2>Examples</h2>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Tooltip example</h3>
                <Showcase data={tooltipExample} />
            </Col>
        </Row>


        <h2>Props</h2>
        <PropsTable data={data} />

    </div>
)
