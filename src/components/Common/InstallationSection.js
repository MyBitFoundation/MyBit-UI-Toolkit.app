import React from 'react'
import { PlainCode } from './index'
import { Tabs } from 'antd'

export default ({ url }) => (
    <div>
        <h2>Installation</h2>
        <Tabs defaultActiveKey="npm">
            <Tabs.TabPane tab="NPM" key="npm">
                <PlainCode>{`$ npm i @bit/mybit.ui.kit.${url}`}</PlainCode>
                Please configure Bit as a scoped registry to install components with NPM:
                <PlainCode>{`$ npm config set '@bit:registry' https://node.bitsrc.io`}</PlainCode>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Yarn" key="yarn">
                <PlainCode>{`$ yarn add @bit/mybit.ui.kit.${url}`}</PlainCode>
                Please configure Bit as a scoped registry to install components with Yarn:
                <PlainCode>{`$ yarn config set "@bit:registry" "https://node.bitsrc.io/"`}</PlainCode>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Bit" key="bit">
                <PlainCode>{`$ bit import mybit.ui/kit/spin`}</PlainCode>
                To import this component for further modification from your project please install Bit:
                <PlainCode>{`$ npm i -g bit-bin`}</PlainCode>
            </Tabs.TabPane>
        </Tabs>
    </div>
)