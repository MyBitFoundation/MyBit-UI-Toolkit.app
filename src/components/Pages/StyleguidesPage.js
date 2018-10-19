import React from 'react';
import { EditPageLink, PlainCode, CustomTag } from '../Common/';
import { Helmet } from "react-helmet";
import { STYLEGUIDE_TITLE } from './pageTitles'
import { ColorShowcase } from '../Common'

const StyleguidesPage = () => (
    <div>
        <Helmet>
            <title>{STYLEGUIDE_TITLE}</title>
        </Helmet>
        <h1>Suggested Styleguide <EditPageLink /></h1>
        <p>Please note that the information below is just a reference to the MyBit brand. Third-party developers remain with the freedom to choose their own styleguides.</p>
        <h2>Colors</h2>
        <p>Click on the color to copy it.</p>
        <h4>Background</h4>
        <ColorShowcase color="linear-gradient(136deg, #001358, #125ac4)" title="Primary Blue Gradient" />
        <ColorShowcase color="#dfe3e6" title="Primary Card Background" textColor="#383838" />
        <ColorShowcase color="#fff" title="Primary Page Background" textColor="#383838" />
        <h4>Text</h4>
        <ColorShowcase color="#383838" title="Primary Gray" />
        <ColorShowcase color="#001358" title="Text Blue Dark" />
        <ColorShowcase color="rgb(45, 184, 75)" title="Currency Green" />
        <ColorShowcase color="#d9d9d9" title="Gray Faded" />
        <ColorShowcase color="#125ac4" title="Link/Bold" />
        <h4>Button</h4>
        <ColorShowcase color="#2e58db" title="Blue Button Mid" />
        <ColorShowcase color="rgb(24, 144, 255)" title="Blue Button Light" />
        <ColorShowcase color="rgb(0, 242, 129)" title="Green Button Light" />
        <h4>Border</h4>
        <ColorShowcase color="linear-gradient(to left, #24F281, #0083FF)" title="Highlight Border" />

        <h2>Typography</h2>
        <h4>Roboto</h4>
        <p>Roboto is the main font used by MyBit - <a href="https://fonts.google.com/specimen/Roboto" target="_blank" rel="noopener noreferrer">read more</a>. Import Roboto to your application by adding the following line between the <CustomTag>{`<head>`}</CustomTag> tags in your <CustomTag>index.html</CustomTag></p>
        <PlainCode>{`<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" type="text/css">`}</PlainCode>
        <h1 style={{fontFamily: "Roboto", textAlign: "center", fontSize: "5vw"}}>MyBit Foundation uses Roboto</h1>

        <h4>Gilroy</h4>
        <p>
            Gilroy is another font in a number of MyBit applications. However, only Gilroy Light and Gilroy ExtraBold are currently 
            free to use - <a href="https://www.tinkov.info/gilroy.html" target="_blank" rel="noopener noreferrer">read more</a>. 
            Gilroy can be used by including the font files to your application directory and the following code to your main CSS file.
        </p>
        <PlainCode>{`@font-face {
  font-family: 'Gilroy';
  src: url("--path--/gilroy-bold.otf") format("opentype");
  font-weight: 700; }

@font-face {
  font-family: 'Gilroy';
  src: url("--path--/gilroy-extrabold.otf") format("opentype");
  font-weight: 900; }

@font-face {
  font-family: 'Gilroy';
  src: url("--path--/gilroy-light.otf") format("opentype");
  font-weight: 300; }

@font-face {
  font-family: 'Gilroy';
  src: url("--path--/gilroy-regular.otf") format("opentype");
  font-weight: 400; }`}
  </PlainCode>

    </div>
)

export default StyleguidesPage