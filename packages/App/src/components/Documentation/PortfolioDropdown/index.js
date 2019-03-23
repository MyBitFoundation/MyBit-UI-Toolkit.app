import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common';
import PortfolioDropdown from '@pbteja-dev/ui.kit.portfolio-dropdown';

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/PortfolioDropdown/index.js"

const portfolioDropdownExample = {
    component: (
        <div>
            <PortfolioDropdown
                name="Sample"
                icon="line-chart"
                color="blue"
                portfolioData={[
                    {
                      assetID: 'asset-id-1',
                      name: 'Example Asset',
                      data: {
                        ownership: '22',
                        value: '14081.25',
                      },
                    },
                    {
                      assetID: 'asset-id-2',
                      name: 'Example Asset 2',
                      data: {
                        ownership: '22',
                        value: '14081.25',
                      },
                    },
                    {
                      assetID: 'asset-id-3',
                      name: 'Example Asset 3',
                      data: {
                        ownership: '22',
                        value: '14081.25',
                      },
                    },
                  ]}
                total="42243.75"
            />
        </div>
    ),
    description: (
        <p>PortfolioDropdown example</p>
    ),
    code: `
    <PortfolioDropdown
        name="Sample"
        icon="line-chart"
        color="blue"
        portfolioData={[
            {
                assetID: 'asset-id-1',
                name: 'Example Asset',
                data: {
                ownership: '22',
                value: '14081.25',
                },
            },
            {
                assetID: 'asset-id-2',
                name: 'Example Asset 2',
                data: {
                ownership: '22',
                value: '14081.25',
                },
            },
            {
                assetID: 'asset-id-3',
                name: 'Example Asset 3',
                data: {
                ownership: '22',
                value: '14081.25',
                },
            },
            ]}
        total="42243.75"
    />
    `,
    display: 'block'
}

const data = [
    {
       "key": 1,
       "property": "name",
       "description": "",
       "type": "string",
       "required": "True",
       "default": "-"
    },
    {
       "key": 2,
       "property": "total",
       "description": "",
       "type": "string",
       "required": "True",
       "default": "-"
    },
    {
       "key": 3,
       "property": "icon",
       "description": "",
       "type": "string",
       "required": "True",
       "default": "-"
    },
    {
       "key": 4,
       "property": "color",
       "description": "",
       "type": "string",
       "required": "True",
       "default": "-"
    },
    {
       "key": 5,
       "property": "portfolioData",
       "description": "",
       "type": "Array of shape {assetID(string), name(string), data(object)}",
       "required": "True",
       "default": "-"
    }
 ];

export default (props) => (
    <div>
        <h1>PortfolioDropdown <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p></p>
        <InstallationSection url={props.url} />

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col span={24}>
                <h3>PortfolioDropdown example</h3>
                <Showcase data={portfolioDropdownExample} />
            </Col>
        </Row>


        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)
