import styled from 'styled-components';

const StyledDropdown = styled.div`
  .ant-dropdown-trigger{
    color: ${props => props.theme.color};
    &:hover{
      color: ${props => props.theme.colorHover};
    }
  }
`;

export default StyledDropdown;
