import React from 'react';
import { Showcase, EditPageLink, PlainCode } from '../Common';
import { Button, Icon } from 'antd'
import styled from 'styled-components'

const AntdHeader = styled.div`
    margin: 15px 0;
    width: 100%;
    height: 140px;
    background-image: linear-gradient(90deg,#0b3f9c,#2e58db);
    display: flex;
    align-items: center;
    justify-content: center;
    > h1 {
        color: white;
        font-size: 4vw;
        margin: 0;
        padding: 0;
    }
`

const HomePage = () => (
    <div>
        <AntdHeader>
            <h1>We <span><Icon type="heart" style={{ color: "pink" }} /></span> Ant Design</h1>
        </AntdHeader>

        <h1>Home, yey! <EditPageLink /></h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
        make a type specimen book.
        </p>

        <h1>Installation</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
        make a type specimen book.
        </p>

        <PlainCode>$ npm install mybit-toolkit</PlainCode>

        <Showcase data={firstExample} />
        <Showcase data={secExample} />

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

