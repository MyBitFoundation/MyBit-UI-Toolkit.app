import styled from 'styled-components';

const StyledPagination = styled.div`
  .ant-pagination-item a  {
    color: ${props => props.theme.color}
  }

  .ant-pagination-item{
    border: ${props => props.theme.borderColor}
    background-color: ${props => props.theme.backgroundColor}
  }
  .ant-pagination-item-active{
    border-color: ${props => props.theme.itemActiveBorderColor}
  }

  .ant-pagination-item:hover{
    border-color: ${props => props.theme.itemHoverBorderColor}
  }

  .ant-pagination-disabled a{
    border-color: ${props => props.theme.disabledItemBorderColor}
    color: ${props => props.theme.disabledItemColor}
  }
`;

export default StyledPagination;
