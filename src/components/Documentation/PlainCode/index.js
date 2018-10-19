import React from 'react';
import { Showcase, EditPageLink, PropsTable, PlainCode, CustomTag } from '../../Common/';
import { Helmet } from "react-helmet";
import { Alert } from 'antd'

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/PlainCode/index.js"

const PlainCodePage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <Alert message="This component is NOT part of MyBitUI and is only used for building documentation!" type="warning" />
    <h1>{props.title} <EditPageLink editLink={EDIT_PAGE} /></h1>
    <p>A simple code snippet container without any styling</p>

    <h1>Import</h1>
    <p>This component is NOT part of the MyBit-UI package and is only used for documentation within this library. The component lives in <CustomTag>src/components/Common/PlainCode.js</CustomTag></p>
    <PlainCode>{`import { PlainCode } from '../../Common'`}</PlainCode>

    <h2>Examples</h2>
    <Showcase data={PlainCodeExample} />
        
    <h2>Props</h2>
    <PropsTable data={PlainCodeExampleProps} />
</div>
)

export default PlainCodePage

//example data
const PlainCodeExample = {
    component: (
        <div>
            <PlainCode>
{`<div>
{showMyComponent
  ? <MyComponent />
  : <OtherComponent />}
</div>`}
            </PlainCode>
        </div>
    ),
    description: (
        <p>PlainCode accepts any template string as children prop</p>
    ),
    code: `<PlainCode>
    ${`<div>
    {showMyComponent
      ? <MyComponent />
      : <OtherComponent />}
    </div>`}
</PlainCode>`,
    display: 'block'
}

//props data
const PlainCodeExampleProps = [{
    key: '1',
    property: 'children',
    description: `expects a template string between the opening and the closing tag`,
    type: 'string',
    required: 'false',
    default: '-'
}];