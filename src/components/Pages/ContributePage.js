import React from 'react';
import { Showcase, EditPageLink, CustomTag, PlainCode, PropsTable } from '../Common/';
import { Row, Col } from 'antd'
import { Helmet } from "react-helmet";
import { CONTRIBUTE_TITLE } from './pageTitles'

const ContributePage = () => (
    <div>
        <Helmet>
            <title>{CONTRIBUTE_TITLE}</title>
        </Helmet>
        <h1>Contributing <EditPageLink /></h1>
        <p>
            Lorem Ipsum is <a href="/">simply dummy text</a> of the printing and typesetting industry. Lorem Ipsum <CustomTag>CustomTag 1</CustomTag>has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
            make a type specimen book.
        </p>

        <h1>How to contribute?</h1>
        <h4>Clone the repository</h4>
        <PlainCode>git clone link-to-the-repository</PlainCode>

        <h4>Create a folder for an isolated component</h4>
        <p>
           Create a folder in the <CustomTag>showcase</CustomTag>directory under <CustomTag>src</CustomTag> e.g. <CustomTag>Button</CustomTag>. This folder should also contain your CSS.
           Create a file <CustomTag>index.js</CustomTag> to contain your component's code e.g. <CustomTag>MyBitButton</CustomTag>.
        </p>

        <h4>Export default</h4>
        <p>
            Export the new isolated component from <CustomTag>src/showcase/index.js</CustomTag> 
        </p>
        <PlainCode>{`export { default as MyBitButton } from './Button'`}</PlainCode>

        <h4>Create the component page</h4>
        <p>
           Create a folder in <CustomTag>src/components/Documentation</CustomTag> and a file <CustomTag>--your-component--Page.js</CustomTag> e.g. <CustomTag>ButtonsPage.js</CustomTag>.
        </p>

        <h4>Create a Route</h4>
        <p>Import the new component in <CustomTag>src/components/Documentation/index.js</CustomTag></p>
        <PlainCode>{`import ButtonsPage from './Buttons/ButtonsPage'`}</PlainCode>

        <p>Add an entry to the array <CustomTag>documentationRoutes</CustomTag>in the same file as above</p>
        <PlainCode>
            {`{
    title: "Button",
    url: "buttons",
    component: ButtonsPage,
    category: CategoryName
}`}
        </PlainCode>

        <h1>Template code</h1>
        <Showcase data={contributeExample} />

        <h4>Create a pull request</h4>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
            make a type specimen book.
        </p>
    </div>
)


const mycode = `
import React from 'react';
import { Showcase, EditPageLink, CustomTag, PlainCode, PropsTable } from '../../Common/';
import { component_to_document } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Row, Col } from 'antd'

const EDIT_PAGE_LINK = "/"

const PAGE = () => (
    <div>
    <h1>Component <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>Where is this component used?</p>

    <h1>Installation</h1>
    <p>How to install and import the component?</p>

    <h1>Examples</h1>
    <h2>Full width</h2>
    <Showcase data={templateExample} />

    <h2>2 columns</h2>
    <Row gutter={16}>
        <Col span={12}><Showcase data={templateExample} /></Col>
        <Col span={12}><Showcase data={templateExample} /></Col>
    </Row >

    <h2>3 columns</h2>
    <Row gutter={16}>
        <Col span={8}><Showcase data={templateExample} /></Col>
        <Col span={8}><Showcase data={templateExample} /></Col>
        <Col span={8}><Showcase data={templateExample} /></Col>
    </Row>

    <h1>Props</h1>
    <PropsTable data={data} />
</div>
)

export default PAGE

//this is the structure of the object to be passed to an <Example> component
const templateExample = {
    component: (
        <div>
           <p>Simple paragraph</p>
        </div>
    ),
    description: (
        <p>Description</p>
    ),
    code: '//code',
    display: 'inline-block'
}

//the array of objects to be passed to a <PropsTable> component
const data = [{
    key: '1',
    property: 'prop name',
    description: 'prop description',
    type: 'type',
    required: 'true/false',
    default: '-'
}];
)

export default TemplatePage

//this is the structure of the object to be passed to an <Example> component
const templateExample = {
    component: (
        <div>
           <p>Simple paragraph</p>
        </div>
    ),
    description: (
        <p>Description</p>
    ),
    code: '//code',
    display: 'inline-block'
}

//the array of objects to be passed to a <PropsTable> component
const temlateData = [{
    key: '1',
    property: 'prop name',
    description: 'prop description',
    type: 'type',
    required: 'true/false',
    default: '-'
}];
`

const temlateData = [{
    key: '1',
    property: 'prop name',
    description: 'prop description',
    type: 'type',
    required: 'true/false',
    default: '-'
}];

const templateExample = {
    component: (
        <div>
           <p>Simple paragraph</p>
        </div>
    ),
    description: (
        <p>Description</p>
    ),
    code: '//code',
    display: 'inline-block'
}

const TEMPLATE_PAGE = (
    <div style={{width: '90%'}}>
        <h1>Component <EditPageLink editLink="/" /></h1>
        <p>Where is this component used?</p>

        <h1>Installation </h1>
        <p>How to install and import the component?</p>

        <h1>Examples</h1>
        <h2>Full width</h2>
        <Showcase data={templateExample} />

        <h2>2 columns</h2>
        <Row gutter={16}>
            <Col span={12}><Showcase data={templateExample} /></Col>
            <Col span={12}><Showcase data={templateExample} /></Col>
        </Row >

        <h2>3 columns</h2>
        <Row gutter={16}>
            <Col span={8}><Showcase data={templateExample} /></Col>
            <Col span={8}><Showcase data={templateExample} /></Col>
            <Col span={8}><Showcase data={templateExample} /></Col>
        </Row>

        <h1>Props</h1>
        <PropsTable data={temlateData} />
    </div>
)

const contributeExample = {
    component: (
        <div>
            {TEMPLATE_PAGE}
        </div>
    ),
    description: (
        <p>The following code shows how to create Examples in one, two and three columns</p>
    ),
    code: mycode,
    display: 'inline-block'
}

export default ContributePage