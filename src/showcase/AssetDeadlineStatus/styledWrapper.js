import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    > .title-wrapper {
        display: inline-block;
        color: #125ac4;
        font-size: 20px;
        font-weight: 700;
        > .calendar {
            height: 20px;
            margin-right: 13px;
            transform: translateY(-2px);
        };
    };
    > .text {
        font-size: 14px;
        color: #383838;
        padding-top: 6px;
    }
`;

export default StyledWrapper;
