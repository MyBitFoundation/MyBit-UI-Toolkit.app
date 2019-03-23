import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import SectionHeader from '@pbteja-dev/ui.kit.section-header';
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/SectionHeader/index.js"

const SectionHeaderPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>SectionHeader <EditPageLink editLink={EDIT_PAGE} /></h1>
    <p>A heading tag with a custom divider</p>

    <InstallationSection url={props.url} />

    <h1>Examples</h1>
    <Showcase data={SectionHeaderExample} />

    <h1>Props</h1>
    <PropsTable data={SectionHeaderProps} />
</div>
)

export default SectionHeaderPage

//example data
const SectionHeaderExample = {
    component: (
        <div>
            <SectionHeader size="40px" squareSize={20}>Cryptocurrency (40px)</SectionHeader>
            <SectionHeader size="40px" squareSize={20} position="right">Cryptocurrency right(40px)</SectionHeader>
            <SectionHeader size="40px" squareSize={20} position="left">Cryptocurrency left (40px)</SectionHeader>
            <SectionHeader size="24px">Cryptocurrency (24px)</SectionHeader>
            <SectionHeader size={1} textColor="black" dividerColor="#125ac4">Cryptocurrency (h1)</SectionHeader>
            <SectionHeader size={2} textColor="black" dividerColor="#125ac4">Cryptocurrency (h2)</SectionHeader>
            <SectionHeader size={3} textColor="black" dividerColor="#125ac4">Cryptocurrency (h3)</SectionHeader>
        </div>
    ),
    description: (
        <p>The SectionHeader is always centered.</p>
    ),
    code: `<SectionHeader size="40px" squareSize={20}>Cryptocurrency (40px)</SectionHeader>
<SectionHeader size="40px" squareSize={20} position="right">Cryptocurrency right(40px)</SectionHeader>
<SectionHeader size="40px" squareSize={20} position="left">Cryptocurrency left (40px)</SectionHeader>
<SectionHeader size="24px">Cryptocurrency (24px)</SectionHeader>
<SectionHeader size={1} textColor="black" dividerColor="#125ac4">Cryptocurrency (h1)</SectionHeader>
<SectionHeader size={2} textColor="black" dividerColor="#125ac4">Cryptocurrency (h2)</SectionHeader>
<SectionHeader size={3} textColor="black" dividerColor="#125ac4">Cryptocurrency (h3)</SectionHeader>`,
    display: 'block'
}

//props data
const SectionHeaderProps = [{
    key: '1',
    property: 'size',
    description: `the size of the section heading: [1..6] for a heading or a string for custom size (e.g. 64px)`,
    type: 'number|string',
    required: 'false',
    default: '1'
},{
    key: '2',
    property: 'dividerColor',
    description: `the color of the square beneath the heading`,
    type: 'string',
    required: 'false',
    default: "#fb3448"
},{
    key: '3',
    property: 'textColor',
    description: `the color of the heading`,
    type: 'string',
    required: 'false',
    default: "#383838"
},{
    key: '4',
    property: 'squareSize',
    description: `the size of the square beneath the heading`,
    type: 'string',
    required: 'false',
    default: "10px"
},{
    key: '5',
    property: 'position',
    description: `positions the heading and the divider to the left, right or center`,
    type: 'string: left|center|right',
    required: 'false',
    default: "center"
}];