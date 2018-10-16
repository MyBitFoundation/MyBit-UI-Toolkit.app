import React from 'react'
import { PlainCode } from './index'

const InstallationSection = ({ name }) => (
    <div>
    <h1>Installation</h1>
        <PlainCode>
{`$ yarn add --package-name--
$ npm install --package-name--
$ --bitsrc-command--  --package-name--/${name}`}
    </PlainCode>
        <PlainCode>{`import { ${name} } from '--package-name--'`}</PlainCode>
    </div>
)

export default InstallationSection