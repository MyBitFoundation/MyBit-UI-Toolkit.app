import React from 'react'
import { PlainCode } from './index'
import { Tabs } from 'antd'

export default ({ url }) => (
    <div>
        <h2>Installation</h2>
        <Tabs defaultActiveKey="npm">
            <Tabs.TabPane tab="NPM" key="npm">
                <PlainCode>{`$ npm i @mybit/ui.kit.${url}`}</PlainCode>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Yarn" key="yarn">
                <PlainCode>{`$ yarn add @mybit/ui.kit.${url}`}</PlainCode>
            </Tabs.TabPane>
        </Tabs>
    </div>
)