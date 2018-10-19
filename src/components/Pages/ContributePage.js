import React from 'react';
import { Showcase, EditPageLink, CustomTag, PlainCode, PropsTable, InstallationSection } from '../Common/';
import { Row, Col } from 'antd'
import { Helmet } from "react-helmet";
import { CONTRIBUTE_TITLE } from './pageTitles'

const GIT_REPO_LINK = "https://github.com/MyBitFoundation/MyBit-UI.website"
const STYLED_COMPONENTS_LINK = "https://www.styled-components.com/docs"
const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Pages/ContributePage.js"

const ContributePage = () => (
    <div>
        <Helmet>
            <title>{CONTRIBUTE_TITLE}</title>
        </Helmet>

        <h1>How to contribute? <EditPageLink editLink={EDIT_PAGE} /></h1>
        <h4>1. Fork the main repository on GitHub <a href={GIT_REPO_LINK}>here</a></h4>
        <h4>2. Clone the forked repository on your machine</h4>
        <PlainCode>git clone https://github.com/--your-username--/MyBit-UI.website</PlainCode>

        <h4>3. Create a folder for an isolated component</h4>
        <p>
           Create a new folder <CustomTag>src/showcase/--your-component-folder--</CustomTag> and an <CustomTag>index.js</CustomTag> file to contain your code.
           All styles must be in the same folder. We use styled-components to allow advanced customization options - <a href={STYLED_COMPONENTS_LINK}>read their documantion</a>.
        </p>

        <h4>4. Export your components</h4>
        <p>
            Export new component from <CustomTag>src/showcase/index.js</CustomTag> 
        </p>
        <PlainCode>{`export { default as --your-component-name--} from './--your-component-folder--'`}</PlainCode>

        <h4>5. Create the component page</h4>
        <p>
           Create a folder <CustomTag>src/components/Documentation/--your-documentation-folder--</CustomTag> with an index file to contain the documentation for your component.
        </p>

        <h4>6. Create a route to your documentation page</h4>
        <p>Import the new component in <CustomTag>src/components/Documentation/index.js</CustomTag></p>
        <PlainCode>{`import --your-component-name--Page from './--your-documentation-folder--'`}</PlainCode>

        <p>Add an entry to the array <CustomTag>documentationRoutes</CustomTag> in the same file as above</p>
        <PlainCode>
{`{
    title: --your-component-name--,
    url: --your-component-name--,
    component: --your-component-name--Page,
    category: --preset-categories--,
    pageTitle: "Component: --your-component-name--"
}

Categories:
GENERAL, FEEDBACK, NAVIGATION, FORMS, ASSETS,
USER, WIDGETS, TEMPLATES, LIBRARY_COMPONENTS`
}
    </PlainCode>

        <h4>7. Create a pull request to the main repository</h4>

        <h1>Example code for a documentation page</h1>
        <Showcase data={contributeExample} />
    </div>
)


const mycode = `
import React from 'react';
import { Showcase, EditPageLink, CustomTag, PlainCode, PropsTable, InstallationSection } from '../../Common/';
import { component_to_document } from '../../../showcase'
import { Row, Col } from 'antd'

const EDIT_PAGE_LINK = "/"

const PAGE = () => (
    <div>
    <h1>Component <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>Where is this component used?</p>

    <InstallationSection url="demoComponentName" />

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

//this is the structure of the object to be passed to an <Showcase> component
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

const EDIT_PAGE_LINK = "/"

const TEMPLATE_PAGE = (
    <div style={{width: '90%'}}>
        <h1>Component <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
        <p>Where is this component used?</p>

        <InstallationSection url="demoComponentName" />

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