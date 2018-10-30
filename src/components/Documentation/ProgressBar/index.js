import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable, Playground } from '../../Common/';
import { ProgressBar } from '../../../showcase'
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/ProgressBar/index.js"

const ProgressBarPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>ProgressBar <EditPageLink editLink={EDIT_PAGE} /></h1>

    <InstallationSection url="Alert" />
    <Playground styling={styling} component={props => (
        <div style={{width: '90%'}}>
            <ProgressBar {...props} percent={100} status={"success"}  />
            <ProgressBar {...props} percent={32} status={"exception"}  />
            <ProgressBar {...props} percent={80} status={"active"}  />
            <ProgressBar {...props} percent={100} status={"success"} showInfo={false} />
        </div>
    )} />
    <h1>Examples</h1>
    <Showcase data={progressExample} />

    <h1>Props</h1>
    <PropsTable data={progressProps} />
</div>
)

export default ProgressBarPage

// styling data
const styling = {
    color: '#ccc',
    exceptionColor: '#f5222d',
    successColor: '#00F281',
    progressColor: '#1890ff'
}

//example data
const progressExample = {
    component: (
        <div style={{width: '50%'}}>
            <ProgressBar percent={100} status={"success"}  />
            <ProgressBar percent={32} status={"exception"}  />
            <ProgressBar percent={80} status={"active"}  />
            <ProgressBar percent={100} status={"success"} showInfo={false} />
        </div>
    ),
    description: (
        <p>ProgressBar takes the width of its container</p>
    ),
    code: `<div style={{width: '50%'}}>
    <ProgressBar percent={100} status={"success"}  />
    <ProgressBar percent={32} status={"exception"}  />
    <ProgressBar percent={80} status={"active"}  />
    <ProgressBar percent={100} showInfo={false} />
</div>`,
    display: 'block'
}

//props data
const progressProps = [{
    key: '1',
    property: 'percent',
    description: `how much of the ProgressBar is filled`,
    type: 'number',
    required: 'true',
    default: '-'
},{
    key: '2',
    property: 'status',
    description: `the status of the ProgressBar`,
    type: 'string: success|exception|active',
    required: 'true',
    default: '-'
},{
    key: '3',
    property: 'showInfo',
    description: `whether to hide the percentage or the icon on the right of the bar`,
    type: 'string: success|exception|active',
    required: 'false',
    default: 'false'
}];