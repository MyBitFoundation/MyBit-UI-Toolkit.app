import React from 'react';
import styled from 'styled-components';

import TaskMarketLogo from '../images/task-market-logo.svg';
import TaskMarketHero from '../images/task-market-hero.svg';

const Header = styled.div`
    & {
        width: 100%;
        height: 674px;
        background: linear-gradient(180deg, #0B3F9C 0%, #2E58DB 100%);
        display: flex;
        flex-direction: column;
        padding-top: 48px;
        padding-bottom: 64px;
    }
    svg {
        align-self: center;
        margin: auto;
    }
`

const TaskMarketTitle = styled.h1`
    font-family: Gilroy;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 48px;
    text-align: center;
    color: #FFFFFF;
`

const TaskMarketParagaph = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    max-width: 744px;
    display: block;
    margin:auto;
`


const TaskMarketHeader = () => (
    <Header>
        <TaskMarketLogo />
        <TaskMarketHero />
        <TaskMarketTitle>Task.Market is on break</TaskMarketTitle>
        <TaskMarketParagaph>
            Task.Market is on break due to the recent Gitcoin developments where a 10% fee 
            on ALL bounties has been introduced.  We believe this fee is extorniate and directly violates 
            everything that defines MyBit. 
        </TaskMarketParagaph>
    </Header>
);

export default TaskMarketHeader;