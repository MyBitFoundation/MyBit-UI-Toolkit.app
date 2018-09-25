import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    > .no-padding-left { 
        padding-left: 0px;
        text-align: left;
    }
`;

export default StyledWrapper;
