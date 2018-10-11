import React from 'react';
import { Showcase, EditPageLink, PlainCode, PropsTable } from '../../Common/';
import { Logo } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'

const EDIT_PAGE_LINK = "/"

const LogoPage = () => (
    <div>
    <h1>Logo <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>MyBit Logo</p>

    <h1>Installation</h1>
    <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
}</PlainCode>
    <PlainCode>{`import { Logo } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

    <h1>Examples</h1>
    <Showcase data={logoExample} />

    <h1>Props</h1>
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