import React from 'react';
import { EditPageLink } from '../Common/';
import { Helmet } from "react-helmet";
import { STYLEGUIDE_TITLE } from './pageTitles'

const StyleguidesPage = () => (
    <div>
        <Helmet>
            <title>{STYLEGUIDE_TITLE}</title>
        </Helmet>
   <h1>Colors <EditPageLink /></h1>
   <p>
       List all colors in a table?
    </p>

    <h1>Spacing</h1>
    <p>
        Talk about spacing?
    </p>

    <h1>Fonts, etc</h1>
    <p>
        etc
    </p>
    </div>
)

export default StyleguidesPage