import React from 'react';
import { Showcase, EditPageLink, CustomTag, PlainCode, PropsTable, InstallationSection } from '../Common/';
import { Row, Col } from 'antd'
import { Helmet } from "react-helmet";
import { CONTRIBUTE_TITLE } from './pageTitles'

const GIT_REPO_LINK = "https://github.com/MyBitFoundation/MyBit-UI.website";
const STYLED_COMPONENTS_LINK = "https://www.styled-components.com/docs";
const STORYBOOK_LINK = "https://storybook.js.org/docs/basics/introduction/";
const STORYBOOK_ADDONS_LINK = "https://storybook.js.org/addons/";
const BABEL_LINK = "https://babeljs.io/docs/en/";
const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Pages/ContributePage.js";
const ORG_NAME = "@mybit";

const ContributePage = () => (
    <div>
        <Helmet>
            <title>{CONTRIBUTE_TITLE}</title>
        </Helmet>

        <h1>How to contribute? <EditPageLink editLink={EDIT_PAGE} /></h1>

        <h4>1. Fork the main repository on GitHub <a href={GIT_REPO_LINK}>here</a></h4>

        <h4>2. Clone the forked repository on your machine</h4>
        <PlainCode>git clone https://github.com/--your-username--/MyBit-UI.website</PlainCode>

        <h4>3. Copy the Sample repo into a folder in packages/ for an isolated component</h4>
        <PlainCode>cp -R Sample packages/--your-new-component-folder--</PlainCode>

        <h4>4. Change the package name of the new component</h4>
        <p>
            Open <CustomTag>packages/--your-new-component-folder--/package.json</CustomTag> and change name to <CustomTag>{ORG_NAME + "/ui.kit.--new-component-name--"}</CustomTag>.
        </p>

        <p>Basic babel setup is made. If any more plugins are needed for babel, add them in <CustomTag>.babelrc</CustomTag> - <a href={BABEL_LINK}>read their documentation</a>.</p>

        <p>All styles must be in the same folder as <CustomTag>packages/--your-new-component-folder--</CustomTag>. We use styled-components to allow advanced customization options - <a href={STYLED_COMPONENTS_LINK}>read their documentation</a>.</p>

        <p>
            Add stories for the component in <CustomTag>packages/index.stories.js</CustomTag>.
            See other stories in the file for a basic idea to write story for the new component - <a href={STORYBOOK_LINK}>read their documentation</a>.
        </p>

        <p>Also checkout <a href={STORYBOOK_ADDONS_LINK}>official storybook addons</a> for advanced testing of component using storybook.</p>

        <h4>5. For adding a local component package as a dependency to the new package, run the following command</h4>
        <PlainCode>lerna add {ORG_NAME}/ui.kit.old-component --scope={ORG_NAME}/ui.kit.--new-component-name-- </PlainCode>
        <p>Remote npm packages can be added normally to the new package using <CustomTag>npm install --package-name--</CustomTag> after navigating to the new component folder.</p>
        <p>Any packages that are present in the root's <CustomTag>package.json</CustomTag> can be used by all the packages that are in <CustomTag>packages</CustomTag> folder.</p>

        <h4>6. Create the component page</h4>
        <p>
            Create a folder <CustomTag>packages/App/src/components/Documentation/--your-documentation-folder--</CustomTag> with an index file to contain the documentation for your component.
        </p>

        <h4>7. Create a route to your documentation page</h4>
        <p>Import the new component in <CustomTag>src/components/Documentation/index.js</CustomTag></p>
        <PlainCode>{`import --your-component-name--Page from './--your-documentation-folder--'`}</PlainCode>

        <p>Add an entry to the array <CustomTag>documentationRoutes</CustomTag> in the same file as above</p>
        <PlainCode>
            {
                `{
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

        <h4>8. Create a pull request to the main repository</h4>

        <h1>Example code for a documentation page</h1>
        <Showcase data={contributeExample} />
    </div>
);


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
`;

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
};

const EDIT_PAGE_LINK = "/";

const TEMPLATE_PAGE = (
    <div style={{width: '90%'}}>
        <h1>Component <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
        <p>Where is this component used?</p>

        <InstallationSection url="demo-component-name" />

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
);

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
};

export default ContributePage