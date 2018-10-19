import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import { Logo } from '../../../showcase'
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/Logo/index.js"

const LogoPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>{props.title} <EditPageLink editLink={EDIT_PAGE} /></h1>
    <p>MyBit Logo</p>

    <InstallationSection url={props.url} />

    <h2>Examples</h2>
    <Showcase data={logoExample} />

    <h2>Props</h2>
    <PropsTable data={logoProps} />
</div>
)

export default LogoPage

//example data
const logoExample = {
    component: (
        <div style={{backgroundColor: '#2e58db', width: '200px'}}>
            <Logo className="classname" />
        </div>
    ),
    description: (
        <p>MyBit logo with an optional className</p>
    ),
    code: `<div style={{backgroundColor: '#2e58db', width: '200px'}}>
    <Logo className="classname" />
</div>`,
    display: 'inline-block'
}

//props data
const logoProps = [{
    key: '1',
    property: 'className',
    description: `optional class for custom styling`,
    type: 'string',
    required: 'false',
    default: '-'
}];