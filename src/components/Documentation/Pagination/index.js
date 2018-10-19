import React from 'react';
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection, Playground } from '../../Common';
import { Pagination } from '../../../showcase'
import { Helmet } from "react-helmet";

const paginationExample = {
    component: (
        <div>
            <Pagination defaultCurrent={6} total={500} />
        </div>
    ),
    description: (
        <p>Pagination example</p>
    ),
    code: `
    <Pagination styling={{
        color: 'rgba(0, 0, 0, 0.65)',
        borderColor: '#d9d9d9',
        backgroundColor: '#ffffff',
        itemActiveBorderColor: 'blue',
        itemHoverBorderColor: 'blue',
        disabledItemBorderColor: '#d9d9d9',
        disabledItemColor: 'rgba(0, 0, 0, 0.25)',
    }} defaultCurrent={6} total={500} />
    `,
    display: 'block'
}


const data = [
    {
       "key": 0,
       "property": "current",
       "description": "current page number",
       "type": "number",
       "required": "False",
       "default": "-"
    },
    {
       "key": 1,
       "property": "defaultCurrent",
       "description": "default initial page number",
       "type": "number",
       "required": "False",
       "default": "1"
    },
    {
       "key": 2,
       "property": "defaultPageSize",
       "description": "default number of data items per page",
       "type": "number",
       "required": "False",
       "default": "10"
    },
    {
       "key": 3,
       "property": "hideOnSinglePage",
       "description": "Whether to hide pager on single page",
       "type": "boolean",
       "required": "False",
       "default": "false"
    },
    {
       "key": 4,
       "property": "itemRender",
       "description": "to customize item innerHTML",
       "type": "(page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode",
       "required": "False",
       "default": "-"
    },
    {
       "key": 5,
       "property": "pageSize",
       "description": "number of data items per page",
       "type": "number",
       "required": "False",
       "default": "-"
    },
    {
       "key": 6,
       "property": "pageSizeOptions",
       "description": "specify the sizeChanger options",
       "type": "string[]",
       "required": "False",
       "default": "'10', '20', '30', '40'"
    },
    {
       "key": 7,
       "property": "showQuickJumper",
       "description": "determine whether you can jump to pages directly",
       "type": "boolean",
       "required": "False",
       "default": "false"
    },
    {
       "key": 8,
       "property": "showSizeChanger",
       "description": "determine whether pageSize can be changed",
       "type": "boolean",
       "required": "False",
       "default": "false"
    },
    {
       "key": 9,
       "property": "showTotal",
       "description": "to display the total number and range",
       "type": "Function(total, range)",
       "required": "False",
       "default": "-"
    },
    {
       "key": 10,
       "property": "simple",
       "description": "whether to use simple mode",
       "type": "boolean",
       "required": "False",
       "default": "-"
    },
    {
       "key": 11,
       "property": "size",
       "description": "specify the size of Pagination, can be set to small",
       "type": "string",
       "required": "False",
       "default": "\"\""
    },
    {
       "key": 12,
       "property": "total",
       "description": "total number of data items",
       "type": "number",
       "required": "False",
       "default": "0"
    },
    {
       "key": 13,
       "property": "onChange",
       "description": "a callback function, executed when the page number is changed, and it takes the resulting page number and pageSize as its arguments",
       "type": "Function(page, pageSize)",
       "required": "False",
       "default": "noop"
    },
    {
       "key": 14,
       "property": "onShowSizeChange",
       "description": "a callback function, executed when pageSize is changed",
       "type": "Function(current, size)",
       "required": "False",
       "default": "noop"
    }
 ];

const styling = {
    color: 'rgba(0, 0, 0, 0.65)',
    borderColor: '#d9d9d9',
    backgroundColor: '#ffffff',
    itemActiveBorderColor: '#1890ff',
    itemHoverBorderColor: '#1890ff',
    disabledItemBorderColor: '#d9d9d9',
    disabledItemColor: 'rgba(0, 0, 0, 0.25)',
}

export default (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>{props.title} <EditPageLink /></h1>
        <p></p>
        <InstallationSection url={props.url} />
        <Playground component={(props) => (
            <Pagination {...props} defaultCurrent={6} total={500} /> 
        )} styling={styling} />
        <h2>Examples</h2>
        <Row gutter={16}>
            <Col span={24}>
                <h3>Pagination example</h3>
                <Showcase data={paginationExample} />
            </Col>
        </Row>


        <h2>Props</h2>
        <PropsTable data={data} />

    </div>
)
