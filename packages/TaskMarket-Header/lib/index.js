import React from 'react';
import styled from 'styled-components';

import TaskMarketLogo from '../images/task-market-logo.svg';

const Header = styled.div`
    & {
        width: 100%;
        height: 222px;
        background: linear-gradient(180deg, #0B3F9C 0%, #2E58DB 100%);
        display: flex;
    }
    svg {
        align-self: center;
    }
`

const TaskMarketHeader = () => (
    <Header>
        <TaskMarketLogo />
    </Header>
);

export default TaskMarketHeader;