import React from 'react';
import { Showcase, EditPageLink, PlainCode, CodeHighlihter } from '../Common';
import { Icon } from 'antd'
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import { HOMEPAGE_TITLE } from './pageTitles'
import { SectionHeader, Button } from '../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../Documentation/config'

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

        <SectionHeader position="left" size="32px">MyBit Community</SectionHeader>
        <p>
        MyBit believes in the concept of co-creation. Community members guide our development with their advice, dedication and active participation in 
        all aspects of the project. Join our community and get involved in our shared mission: to lead the way in the automated era. 
        </p>
        <Button>Contribute</Button>

        <SectionHeader position="left" size="32px">Installation</SectionHeader>
        <h4>We recommend using npm or yarn to install</h4>
        <PlainCode>{`$ npm install ${MYBIT_UI_NAME}`}</PlainCode>
        <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}`}</PlainCode>
        <h4>Usage</h4>
        <PlainCode>{`import { --your-component-- } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>
        <p>Import the antd stylesheet manually.</p>
        <PlainCode>{`import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'`}</PlainCode>

        <SectionHeader position="left" size="32px">MyBit Foundation</SectionHeader>
        <p>MyBit Foundation. Dammstrasse 16, 6300 Zug, Switzerland.</p>
        <p>MyBit Stiftung (MyBit Foundation) is registered in Zug, Switzerland.</p>
        <p>Identification number CHE-177.186.963 (pdf), Commercial register (web).</p>
        
    </div>
)

const firstExample = {
    component: (
        <div>
            <Button>Example Button</Button>
            <Button>Example Button</Button>
        </div>
    ),
    description: (
        <p>description, notes or whatever that may be considered useful</p>
    ),
    code: `$ npm install dasdasdasd`,
    display: 'inline-block'
}

const secExample = {
    component: (
        <div>
            <Button>Example Button</Button>
            <Button>Example Button</Button>
        </div>
    ),
    description: (
        <p>description, notes or whatever that may be considered useful</p>
    ),
    code: `$ npm install asdasdadada`,
    display: 'block'
}

export default HomePage

