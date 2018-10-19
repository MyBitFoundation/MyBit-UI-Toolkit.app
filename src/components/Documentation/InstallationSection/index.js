import React from 'react';
import { Showcase, EditPageLink, PropsTable, PlainCode, CustomTag, InstallationSection } from '../../Common/';
import { Helmet } from "react-helmet";
import { Alert } from 'antd'

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/InstallationSection/index.js"

const InstallationSectionPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <Alert message="This component is NOT part of MyBitUI and is only used for building documentation!" type="warning" />
    <h1>{props.title} <EditPageLink editLink={EDIT_PAGE} /></h1>
    <p>A section to contain install and import instructions for a MyBit component</p>

    <h1>Import</h1>
    <p>This component is NOT part of the MyBit-UI package and is only used for documentation within this library. The component lives in <CustomTag>src/components/Common/PlainCode.js</CustomTag></p>
    <PlainCode>{`import { InstallationSection } from '../../Common'`}</PlainCode>

    <h2>Examples</h2>
    <Showcase data={InstallationSectionExample} />
        
    <h2>Props</h2>
    <PropsTable data={InstallationSectionProps} />
</div>
)

export default InstallationSectionPage

//example data
const InstallationSectionExample = {
    component: (
        <div>
            <InstallationSection url={"demoComponent"} />
        </div>
    ),
    description: (
        <p>The prop <CustomTag>url</CustomTag> expects a string</p>
    ),
    code: `<InstallationSection url={"demoComponent"} />`,
    display: 'block'
}

//props data
const InstallationSectionProps = [{
    key: '1',
    property: 'url',
    description: `the name of the component`,
    type: 'string',
    required: 'true',
    default: '-'
}];