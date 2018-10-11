import React from 'react';
import { 
    PropsTable, 
    Showcase, 
    EditPageLink, 
    PlainCode,
    CustomTag
} from '../../Common/';
import { Button, Alert } from 'antd'
import { Helmet } from "react-helmet";

const EXAMPLE_PAGE_EDIT_LINK = "/"

const ShowcasePage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <Alert message="This component is NOT part of MyBitUI and is only used for building documentation!" type="warning" />
        <h1>Example <EditPageLink editLink={EXAMPLE_PAGE_EDIT_LINK} /></h1>
        <p>The showcase component.</p>

        <h1>Import</h1>
        <p>This component is NOT part of the MyBit-UI package and is only used for documentation within this library. The component lives in <CustomTag>src/components/Common/Example.js</CustomTag></p>
        <PlainCode>{`import { Showcase } from '../../Common'`}</PlainCode>

        <h1>Examples</h1>

        <h2>Simple use case</h2>
        <Showcase data={demoExample} />

        <h2>Render children inline</h2>
        <Showcase data={inlineChildren} />

        <h2>Render children as blocks</h2>
        <Showcase data={blockChildren} />

        <h2>Children with display:flex</h2>
        <Alert message="In cases when the Showcase component contains a child with display: 
        flex, wrap it in another <div> so that its display property will not get overwritten" type="error" />
        <PlainCode>{flexChild}</PlainCode>

        <h2>exampleData object</h2>
        <PlainCode>{exampleObjectString}</PlainCode>

        <h1>Props</h1>
        <PropsTable data={data} />

    </div>
)

export default ShowcasePage

const flexChild = `const flexChild = {
    component: (
        <div style={{custom style}}> //the parent div with all children
            //all direct children will receive display: inline-block OR block
            //wrap your component in another div in order to preserve its display:flex property
            <div>
                //the component with display:flex
            </div>
        </div>
    ),
    description: (
        //description
    ),
    code: //template string with the component's code,
    display: 'inline-block' OR 'block'
}
`

const exampleObjectString = `const data = {
    component: (
        <div style={{custom style}}> 
            //showcase
        </div>
    ),
    description: (
        //description
    ),
    code: //template string with the component's code,
    display: 'inline-block' OR 'block'
}
`

//first example
const simepleUseExampleStr = `
import { Showcase } from '../../Common'

<Showcase data={demoExample} />

//the structure of the object to be passed
const demoExample = {
    component: (
        <div>
            <p>Component (JSX)</p>
        </div>
    ),
    description: (
        <p>Description</p>
    ),
    code: "Code",
    display: 'inline-block'
}
`

const simepleUseExample =  {
    component: (
        <div>
            <p>Component</p>
        </div>
    ),
    description: (
        <p>Description</p>
    ),
    code: "Code",
    display: 'inline-block'
}

const demoExample = {
    component: (
        <div style={{width: "90%"}}>
            <Showcase data={simepleUseExample} />
        </div>
    ),
    description: (
        <p>The Example component requires one prop <CustomTag>exampleData</CustomTag> of type Object to be passed.</p>
    ),
    code: simepleUseExampleStr,
    display: 'inline-block'
}

//inline example
const inlineChildrenString = `
import { Example } from '../../Common'

<Showcase data={inlineExample} />

//the structure of the object to be passed
const inlineExample =  {
    component: (
        <div>
            <Button>Child</Button>
            <Button>Another child</Button>
            <Button>Third child</Button>
            <Button>Inline</Button>
        </div>
    ),
    description: (
        <p>Render children inline</p>
    ),
    code: //buttons,
    display: 'inline-block'
}
`

const inlineChildrenInnerExample =  {
    component: (
        <div>
            <Button>Child</Button>
            <Button>Another child</Button>
            <Button>Third child</Button>
            <Button>Inline</Button>
        </div>
    ),
    description: (
        <p>Render children inline</p>
    ),
    code: `//buttons`,
    display: 'inline-block'
}

const inlineChildren = {
    component: (
        <div style={{width: "90%"}}>
            <Showcase data={inlineChildrenInnerExample} />
        </div>
    ),
    description: (
        <p>Render children inline with <CustomTag>display: 'inline-block'</CustomTag></p>
    ),
    code: inlineChildrenString,
    display: 'inline-block'
}


//inline example
const blockChildrenString = `
import { Example } from '../../Common'

<Showcase data={blockChildrenInnerExample} />

//the structure of the object to be passed
const blockChildrenInnerExample =  {
    component: (
        <div>
            <Button>Child</Button>
            <Button>Another child</Button>
            <Button>Third child</Button>
            <Button>Block</Button>
        </div>
    ),
    description: (
        <p>Render children as blocks with display:'block' </p>
    ),
    code: //buttons,
    display: 'block'
}
`

const blockChildrenInnerExample =  {
    component: (
        <div>
            <Button>Child</Button>
            <Button>Another child</Button>
            <Button>Third child</Button>
            <Button>Block</Button>
        </div>
    ),
    description: (
        <p>Render children as blocks</p>
    ),
    code: `//buttons`,
    display: 'block'
}

const blockChildren = {
    component: (
        <div style={{width: "90%"}}>
            <Showcase data={blockChildrenInnerExample} />
        </div>
    ),
    description: (
        <p>Render children as blocks with <CustomTag>{`display: 'block'`}</CustomTag></p>
    ),
    code: blockChildrenString,
    display: 'inline-block'
}

//PROPS data
const data = [{
    key: '1',
    property: 'exampleData',
    description: 'all the data for showcasing a component',
    type: 
    `object {
        component: element, 
        description: element, 
        code: string, 
        display: oneOf(['inline-block', 'block'])
    }`,
    required: 'True',
    default: '-'
}];