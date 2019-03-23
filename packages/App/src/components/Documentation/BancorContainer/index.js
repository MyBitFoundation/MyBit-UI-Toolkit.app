import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import BancorContainer, { Consumer as BancorConsumer } from '@mybit/ui.bancor-container';
import Button from '@mybit/ui.button';
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/BancorContainer/index.js"

const BancorContainerPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
        <h1>Bancor Container (with Context) <EditPageLink editLink={EDIT_PAGE} /></h1>
        <p>Provides Context exposing method for interacting with Bancor Widget</p>

        <InstallationSection url={props.url} />

        <h1>Examples</h1>
        <Showcase data={bancorExample} />

        <h1>Configuration object</h1>
        <PropsTable data={bancorProps} />
    </div>
)

export default BancorContainerPage

//example data
const bancorExample = {
    component: (
        <div>
            <BancorContainer>
                <BancorConsumer>
                    {bancor => (
                    <React.Fragment>
                        <Button onClick={() => bancor.initBancor()}>GET MYB</Button>
                        <Button onClick={() => bancor.initBancor({
                        baseCurrencyId: "5937d635231e97001f744267",
                        pairCurrencyId: "5937d635231e97001f744267",
                        displayCurrency: "ETH",
                        operation: "buy",
                        })}>GET ETH</Button>
                    </React.Fragment>
                    )}
                </BancorConsumer>
            </BancorContainer>
        </div>
    ),
    description: (
        <p>Examples for calling initBancor with and without configuration.</p>
    ),
    code: `
<BancorContainer>
    <BancorConsumer>
        {bancor => (
        <React.Fragment>
            <Button onClick={() => bancor.initBancor()}>GET MYB</Button>
            <Button onClick={() => bancor.initBancor({
            baseCurrencyId: "5937d635231e97001f744267",
            pairCurrencyId: "5937d635231e97001f744267",
            displayCurrency: "ETH",
            operation: "buy",
            })}>GET ETH</Button>
        </React.Fragment>
        )}
    </BancorConsumer>
</BancorContainer>
`,
    display: 'inline-block'
}

//props data
const bancorProps = [{
        key: '1',
        property: 'type',
        description: `-`,
        type: 'number',
        required: 'false',
        default: '1'
    },
    {
        key: '2',
        property: 'baseCurrencyId',
        description: `-`,
        type: 'string',
        required: 'false',
        default: '5b164627ae2482321708eb93'
    },
    {
        key: '3',
        property: 'pairCurrencyId',
        description: `-`,
        type: 'string',
        required: 'false',
        default: '5937d635231e97001f744267'
    },
    {
        key: '4',
        property: 'primaryColor',
        description: `-`,
        type: 'string',
        required: 'false',
        default: '#1890ff'
    },
    {
        key: '5',
        property: 'displayCurrency',
        description: `-`,
        type: 'string',
        required: 'false',
        default: 'ETH'
    },
    {
        key: '6',
        property: 'operation',
        description: `-`,
        type: `string: oneOf['buy', 'sell']`,
        required: 'false',
        default: 'buy'
    }];