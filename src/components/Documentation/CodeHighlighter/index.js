import React from 'react';
import { Showcase, EditPageLink, PropsTable, PlainCode, CustomTag, CodeHighlighter } from '../../Common/';
import { Helmet } from "react-helmet";
import { Alert } from 'antd'

const EDIT_PAGE_LINK = "/"

const PlainCodePage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <Alert message="This component is NOT part of MyBitUI and is only used for building documentation!" type="warning" />
    <h1>{props.title} <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>A code snippet container with built-in code highlighter</p>

    <h1>Import</h1>
    <p>This component is NOT part of the MyBit-UI package and is only used for documentation within this library. The component lives in <CustomTag>src/components/Common/PlainCode.js</CustomTag></p>
    <PlainCode>{`import { CodeHighlighter } from '../../Common'`}</PlainCode>

    <h2>Examples</h2>
    <Showcase data={CodeHighlighterExample} />
        
    <h2>Props</h2>
    <PropsTable data={CodeHighlighterProps} />
</div>
)

export default PlainCodePage

const exampleString = `import React from 'react'
import ReactDOM from 'react-dom'
class Hello extends React.Component {
  render () {
    return <div className='message-box'>
      Hello {this.props.name}
    </div>
  }
}`

//example data
const CodeHighlighterExample = {
    component: (
        <div>
           <CodeHighlighter code={exampleString} />
        </div>
    ),
    description: (
        <p>CodeHighlighter requires one prop called <CustomTag>code</CustomTag> to be passed</p>
    ),
    code: `${`const exampleString = ${"`"}import React from 'react'
    import ReactDOM from 'react-dom'
    class Hello extends React.Component {
      render () {
        return <div className='message-box'>
          Hello {this.props.name}
        </div>
      }
    }${"`"}`}
<CodeHighlighter code={exampleString} />`,
    display: 'block'
}

//props data
const CodeHighlighterProps = [{
    key: '1',
    property: 'code',
    description: `a template string with code`,
    type: 'string',
    required: 'true',
    default: '-'
}];