import React from 'react';
import { Showcase, EditPageLink, InstallationSection } from '../../Common/';
import { Header } from '../../../showcase'
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/Header/index.js"

const MyBitGoHeaderPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>Header<EditPageLink editLink={EDIT_PAGE} /></h1>
    <p>MyBit General Header header</p>

    <InstallationSection url={props.url} />

    <h1>Examples</h1>
    <Showcase data={headerExample} />
</div>
)

export default MyBitGoHeaderPage

const headerExample = {
    component: (
        <div>
            <div>
                <Header />
            </div>
        </div>
    ),
    display: 'block'
}