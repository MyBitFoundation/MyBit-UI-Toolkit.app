import React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd';

const StyledWrapper = styled.div`
    display: flex;
    max-width: 31%;
    width: calc(100% - 24px);
    min-width: 320px;
    height: 130px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    font-size: 12px;
    color: #777;
    margin: 0 24px 24px 0;
    vertical-align: middle;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    &:hover {
        border: none;
        box-shadow: 2px 6px 17px -5px rgba(158,144,158,1);
    }
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 130px;
    }
    .icon > * {
        margin: 30px 20px 30px 30px;
        font-size: 54px;
        width: 54px;
    }
    .content {
        display: flex;
        flex-flow: column;
        justify-content: center;
    }
    .title {
        display: block;
        font-size: 16px;
        color: #314659;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 1.2;
        margin-bottom: 6px;
    }
    .description {
        display: block;
        color: #697b8c;
        padding-right: 16px;
    }
`

const ApplicationCard = ({ data }) => (
    <StyledWrapper>
        <div className="icon">
            <Icon type="up-square" theme="outlined" />
        </div>
        <div className="content">
            <span className="title">APP NAME</span>
            <span className="description">a very important description  a very important description a very important description</span>
        </div>
    </StyledWrapper>
)

export default ApplicationCard