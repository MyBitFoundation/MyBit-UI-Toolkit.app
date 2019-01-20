import React from 'react'
import { PlainCode } from './index'
import { Tabs } from 'antd'

export default ({ url }) => {
     const convertToPascalCase = (url) => {
         let camelCased = url.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
         return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
     };
    return (
        <div>
            <h2>Installation</h2>
            <Tabs defaultActiveKey="npm">
                <Tabs.TabPane tab="NPM" key="npm">
                    <PlainCode>{`$ npm i mybit-ui`}</PlainCode>
                    {/*Please configure Bit as a scoped registry to install components with NPM:*/}
                    {/*<PlainCode>{`$ npm config set '@bit:registry' https://node.bitsrc.io`}</PlainCode>*/}
                    You can import the component in the following way
                    <PlainCode>{`import { ${convertToPascalCase(url)} } from 'mybit-ui'`}</PlainCode>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Yarn" key="yarn">
                    <PlainCode>{`$ yarn add mybit-ui`}</PlainCode>
                    {/*Please configure Bit as a scoped registry to install components with Yarn:*/}
                    {/*<PlainCode>{`$ yarn config set "@bit:registry" "https://node.bitsrc.io/"`}</PlainCode>*/}
                    You can import the component in the following way
                    <PlainCode>{`import { ${convertToPascalCase(url)} } from 'mybit-ui'`}</PlainCode>
                </Tabs.TabPane>
                {/*<Tabs.TabPane tab="Bit" key="bit">*/}
                {/*<PlainCode>{`$ bit import mybit.ui/kit/spin`}</PlainCode>*/}
                {/*To import this component for further modification from your project please install Bit:*/}
                {/*<PlainCode>{`$ npm i -g bit-bin`}</PlainCode>*/}
                {/*</Tabs.TabPane>*/}
            </Tabs>
        </div>
    )
}