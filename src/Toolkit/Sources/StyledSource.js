import styled from 'styled-components';

const StyledSource = styled.span`
  cursor: pointer;

  :hover{
    color: #1890ff;
  }

  color: ${props => props.selected && '#1890ff'};
`;

export default StyledSource;
