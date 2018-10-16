import React from 'react';
import { EditPageLink, ApplicationCard } from '../Common';
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import { APPLICATIONS_TITLE } from './pageTitles'
import { SectionHeader } from '../../showcase'
import * as applogos from './applogos'

const StyledGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

const AppsPage = () => (
    <div>
        <Helmet>
            <title>{APPLICATIONS_TITLE}</title>
        </Helmet>
        <h1>Applications <EditPageLink /></h1>
        <p>A showcase for all applications built with the MyBitUI library</p>

        <h2>MyBit Foundation</h2>
        <StyledGrid>
            {MyBitFoundation.map(project => (
                <ApplicationCard data={project} />
            ))}
        </StyledGrid>

    </div>
)

export default AppsPage

const MyBitFoundation = [
{
    logo: applogos.MyBitGo,
    url: "/",
    active: true,
    title: "MyBit Go",
    description: `IoT Investment Platform`
},
{
    logo: applogos.MyBitMobile,
    url: "/",
    active: true,
    title: "MyBit Mobile",
    description: `Android Mobile Wallet`
},
{
    logo: applogos.MyBitTrust,
    url: "/",
    active: true,
    title: "MyBit Trust",
    description: `Trust fund for distributing Blockchain assets`
},
{
    logo: applogos.Will,
    url: "/",
    active: false,
    title: "MyBit Will",
    description: `Blockchain-based wills for distributing assets`
},
{
    logo: applogos.Options,
    url: "/",
    active: false,
    title: "MyBit Options",
    description: `Automating company token and stock option distributions`
},
{
    logo: applogos.Fork,
    url: "/",
    active: false,
    title: "Fork",
    description: `Decentralised bill-splitting`
},
{
    logo: applogos.Dropzone,
    url: "/",
    active: false,
    title: "Dropzone",
    description: `Simple and efficient crypto airdrops`
},
{
    logo: applogos.MyDax,
    url: "/",
    active: false,
    title: "MYDAX",
    description: `Decentralized IoT asset exchange`
},
{
    logo: applogos.Payroll,
    url: "/",
    active: false,
    title: "MyBit Payroll",
    description: `Smart contract-based payroll automation`
},
{
    logo: applogos.MyBitMobile,
    url: "/",
    active: false,
    title: "MyBit Mobile",
    description: `iOS mobile wallet`
},
{
    logo: applogos.Cheque,
    url: "/",
    active: false,
    title: "MyBit Cheque",
    description: `Request payments in criptocurrency`
},
{
    logo: applogos.MyBitSavings,
    url: "/",
    active: false,
    title: "MyBit Savings",
    description: `Automate saving money while you spend`
},
{
    logo: applogos.MyBitBudget,
    url: "/",
    active: false,
    title: "MyBit Budget",
    description: `Put limits on the amount you spend`
}
]
    
