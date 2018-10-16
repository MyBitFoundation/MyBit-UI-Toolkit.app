import React from 'react';
import { PlainCode} from '../Common';
import { Icon } from 'antd'
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import { HOMEPAGE_TITLE } from './pageTitles'
import { SectionHeader, Button } from '../../showcase'

const AntdHeader = styled.div`
    margin: 15px 0px 30px 0px;
    width: 100%;
    height: 140px;
    background-image: linear-gradient(90deg,#0b3f9c,#2e58db);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px 50px #999;
    > h1 {
        color: white;
        font-size: 4vw;
        margin: 0;
        padding: 0;
    }
`

const HomePage = () => (
    <div>
        <Helmet>
            <title>{HOMEPAGE_TITLE}</title>
        </Helmet>

        <AntdHeader>
            <h1>We <span><Icon type="heart" style={{ color: "pink" }} /></span> Ant Design</h1>
        </AntdHeader>

        <SectionHeader position="left" size="32px">About MyBit</SectionHeader>
        <p style={{textAlign: "justified"}}>
        MyBit was started by a team of industry veterans who spotted a massive problem with today’s financial systems. Third party agents such as lawyers, escrow agents, and brokers are required to establish trust and conduct transactions.
This is inefficient, unsafe, and expensive. Our vision is to utilise smart contract technology to eliminate the need for these centralised sources and creating a more efficient, secure, and cost-effective wealth management environment.
MyBit provides robust developer tools such as SDKs and UI Kits to give engineers the power to rapidly build, test and deploy wealth management applications on the Ethereum blockchain as well as funding mechanisms to support and scale disruptive projects.
        </p>
        <p>
        MyBit believes in the concept of co-creation. Community members guide our development with their advice, dedication and active participation in 
        all aspects of the project. Join our community and get involved in our shared mission: to lead the way in the automated era. 
        </p>
        <Button>Join our Community? Maybe a list of social media profiles?</Button>

        <SectionHeader position="left" size="32px">Installation</SectionHeader>
        <h4>We recommend using npm or yarn to install</h4>
        <PlainCode>{`$ npm install --package-name--`}</PlainCode>
        <PlainCode>{`$ yarn add --package-name--`}</PlainCode>
        <h4>Usage</h4>
        <PlainCode>{`import { --your-component-- } from '--package-name--'`}</PlainCode>
        <p>Import the antd stylesheet manually.</p>
        <PlainCode>{`import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'`}</PlainCode>
        <h4>Project structure</h4>
        <PlainCode>
{`├── __tests__
│   ├── *.test.js //test files
├── public
│   ├── favicon.png
│   ├── index.html
│   ├── manifest.json
├── src
│   ├── components
│   │   ├── Common //components which build the library
│   │   ├── Documentation 
│   │   │   ├── * //a folder for each documentation page
│   │   │   ├── categories.js //a list of component categories
│   │   │   ├── index.js //export documentation routes
│   │   ├── Pages //the content section for each static page (Home, Contribute, etc)
│   │   ├── Sections
│   │   │   ├── Footer.js Header.js Sidebar.js
│   │   │   ├── Content.js //contains the Router switch 
│   │   ├── App.js
│   ├── showcase //folder to be publised as an NPM package
│   │   ├── * //a folder for each isolated component
│   │   │   ├── index.js //component's code
│   │   │   ├── styled.js //styled-components
│   ├── index.css //main styles
│   ├── index.js
├── package.json
`}
        </PlainCode>

        <SectionHeader position="left" size="32px">MyBit Foundation</SectionHeader>
        <p>MyBit Foundation. Dammstrasse 16, 6300 Zug, Switzerland.</p>
        <p>MyBit Stiftung (MyBit Foundation) is registered in Zug, Switzerland.</p>
        <p>Identification number CHE-177.186.963 (pdf), Commercial register (web).</p>
        
    </div>
)

export default HomePage

