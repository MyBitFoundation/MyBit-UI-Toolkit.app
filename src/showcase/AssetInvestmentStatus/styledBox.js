import styled from 'styled-components';

const StyledBox = styled.div`
    padding: 0px 20px;
    border-right: ${props => (props.border ? '1px solid black' : 'none')};
    text-align: center;
    > .title {
        font-size: 14px;
        font-weight: 500;
        color: #383838;
        line-height: 1.5;
        margin: 0;
        padding: 0;
    };
    > .content {
        font-size: 18px;
        color: ${props => (props.black ? 'black' : 'rgb(45, 184, 75)')};
        font-weight: 700;
        margin: 0;
        padding: 0;
    }
`;

export default StyledBox;
