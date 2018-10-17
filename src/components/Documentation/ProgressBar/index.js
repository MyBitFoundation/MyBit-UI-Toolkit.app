import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import { ProgressBar } from '../../../showcase'
import { Helmet } from "react-helmet";

const EDIT_PAGE_LINK = "/"

const ProgressBarPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>ProgressBar <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>MyBit Logo</p>

    <InstallationSection url="Alert" />

    <h1>Examples</h1>
    <Showcase data={progressExample} />

    <h1>Props</h1>
    <PropsTable data={progressProps} />
</div>
)

export default ProgressBarPage

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