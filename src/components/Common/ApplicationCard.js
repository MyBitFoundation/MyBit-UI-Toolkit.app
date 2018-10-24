import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 320px;
    min-width: 320px;
    max-width: 320px;
    height: 220px;
    color: #777;
    margin: 0 24px 24px 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 25px 0 rgba(15,53,90,.5);
    background: linear-gradient(136deg, #001358, #125ac4);
    border: 6px solid #125ac4;
    &:hover {
        border: 6px solid #1890ff;;
    }
    .app-logo {
        display: flex;
        width: 200px;
        justify-content: center;
        text-align: center;
    }
    .app-logo > img {
        transition: all 0.3s;
        width: 120px;
    }
    &:hover .app-logo > img {
        transform: scale(0) translateY(-200px);
        opacity: 0;
        transition: all 0.3s;
    }
    .title {
        position: absolute;
        color: white;
        top: 15px;
        font-size: 18px;
        margin-bottom: 5px;
        opacity: 0;
        transform: translateX(200px);
        transition: all 0.3s;
    }
    .description {
        top: 45px;
        color: white;
        position: absolute;
        text-align: center;
        font-size: 12px;
        padding: 0px 30px;
        line-height: 22px;
        margin-bottom: 5px;
        opacity: 0;
        transform: scale(0);
        transition: all 0.3s;
    }
    .mybutton {
        position: absolute;
        bottom: 10px;
    }
    .mybutton > button {
        background: linear-gradient(to left, #24F281, #0083FF);
        color: white;
        border: none;
        padding: 5px 10px;
        opacity: 0;
        transform: translateX(-200px);
        transition: all 0.3s;
        width: 120px;
    }
    &:hover > .title {
        opacity: 1;
        transition: all 0.6s;
        transform: translate(0px, 0px);
    }
    &:hover > .description {
        opacity: 1;
        transition: all 0.6s;
        transform: scale(1);
    }
    &:hover > .mybutton > button {
        opacity: 1;
        transition: all 0.6s;
        transform: translate(0px, 0px);
    }
    &:hover > .mybutton > button[disabled] {
        opacity: 0.5;
        transition: all 0.6s;
        transform: translate(0px, 0px);
    }
`

const ApplicationCard = ({ data }) => (
    <StyledWrapper>
        <div className="app-logo">
            <img src={data.logo} alt={data.title} />
        </div>
        <div className="title">
            {data.title}
        </div>
        <div className="description">
            {data.description}
        </div>
        <a href={data.url} target="_blank" className="mybutton" rel="noopener noreferrer">
            <button disabled={!data.active}>{data.active ? 'Visit' : 'Coming soon'}</button>
        </a>
    </StyledWrapper>
)

export default ApplicationCard