import React from 'react';
import { EditPageLink } from '../Common/';
import { Helmet } from "react-helmet";
import { STYLEGUIDE_TITLE } from './pageTitles'
import { ColorShowcase } from '../Common'

const StyleguidesPage = () => (
    <div>
        <Helmet>
            <title>{STYLEGUIDE_TITLE}</title>
        </Helmet>
        <h1>Colors <EditPageLink /></h1>
        <h3>Background</h3>
        <ColorShowcase color="linear-gradient(136deg, #001358, #125ac4)" title="Primary Blue Gradient" />
        <ColorShowcase color="#dfe3e6" title="Primary Card Background" textColor="#383838" />
        <ColorShowcase color="#fff" title="Primary Page Background" textColor="#383838" />
        <h3>Text</h3>
        <ColorShowcase color="#383838" title="Primary Gray" />
        <ColorShowcase color="#001358" title="Text Blue Dark" />
        <ColorShowcase color="rgb(45, 184, 75)" title="Currency Green" />
        <ColorShowcase color="#d9d9d9" title="Gray Faded" />
        <ColorShowcase color="#125ac4" title="Link/Bold" />
        <h3>Button</h3>
        <ColorShowcase color="#2e58db" title="Blue Button Mid" />
        <ColorShowcase color="rgb(24, 144, 255)" title="Blue Button Light" />
        <ColorShowcase color="rgb(0, 242, 129)" title="Green Button Light" />
        <h3>Border</h3>
        <ColorShowcase color="linear-gradient(to left, #24F281, #0083FF)" title="Highlight Border" />

        <h1>Fonts (demo of Roboto and Gilroy?)</h1>
        
    </div>
)

export default StyleguidesPage