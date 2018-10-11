import React from 'react';
import { EditPageLink, ApplicationCard } from '../Common';
import styled from 'styled-components'

const StyledGrid = styled.div`
    display: flex;
    flex-flow: wrap;
    flex-wrap: wrap;
    width: 100%;
`

const AppsPage = () => (
    <div>
        <h1>Applications <EditPageLink /></h1>
        <p>A showcase for all applications built with the MyBitUI library</p>

        <h2>MyBit Foundation</h2>
        <StyledGrid>
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
        </StyledGrid>

    </div>
)

export default AppsPage

