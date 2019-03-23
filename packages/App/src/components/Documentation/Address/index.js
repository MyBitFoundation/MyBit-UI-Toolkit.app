import React from 'react';
import Address from '@mybit/ui.address';
import { Showcase, EditPageLink, CustomTag, PropsTable, InstallationSection } from '../../Common/';
import { Row, Col } from 'antd';
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/Address/index.js";

const AddressPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>Address <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p>Used to display user's MetaMask address</p>

        <InstallationSection url={props.url} />

        <h1>Examples</h1>
        <Row gutter={16}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}><Showcase data={withUsername} /></Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}><Showcase data={withoutUsername} /></Col>
        </Row >

        <h1>Props</h1>
        <PropsTable data={temlateData} />
    </div>
)

export default AddressPage

const temlateData = [{
    key: '1',
    property: 'userName',
    description: 'the username to be displayed, a loader will appear if userName is undefined',
    type: 'string',
    required: 'false',
    default: '-'
},
{
    key: '2',
    property: 'className',
    description: 'a class for custom styling',
    type: 'string',
    required: 'false',
    default: '-'
}];

//with username
const withUsername = {
    component: (
        <div>
           <Address userName="0xA91BDAF22" className="classname" />,
        </div>
    ),
    description: (
        <p>Address with <CustomTag>userName</CustomTag> prop</p>
    ),
    code: '<Address userName="0xA91BDAF22" className="classname" />',
    display: 'inline-block'
}

//without username
const withoutUsername = {
    component: (
        <div>
           <Address className="classname" />,
        </div>
    ),
    description: (
        <p>If <CustomTag>userName</CustomTag> is not passed, a loader will appear instead</p>
    ),
    code: '<Address className="classname" />,',
    display: 'inline-block'
}