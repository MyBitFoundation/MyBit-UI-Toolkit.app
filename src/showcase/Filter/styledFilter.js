import styled from 'styled-components';

const StyledFilter = styled.div`
    display: inline-block;
    margin-top: 10px;

    .ant-tag-checkable{
      background-color: ${props => props.theme.uncheckedBackgroundColor};
      border-color: ${props => props.theme.uncheckedBorderColor};
      color: ${props => props.theme.uncheckedColor};

      &:hover{
        color: ${props => props.theme.hoverColor};
      }
    }

    .ant-tag-checkable-checked{
      background-color: ${props => props.theme.checkedBackgroundColor};
      color: ${props => props.theme.checkedColor};
      border-color: ${props => props.theme.checkedBorderColor};

      &:hover{
        color: ${props => props.theme.checkedColor};
      }
    }
`;

export default StyledFilter;
