import styled from 'styled-components';

const StyledPagination = styled.div`
  .ant-pagination-item a  {
    color: ${props => props.theme.color}
  }

  .ant-pagination-item,
  .ant-pagination-item a, 
  .ant-pagination-prev a, 
  .ant-pagination-next a {
    color: ${props => props.theme.color};
    border-color: ${props => props.theme.borderColor};
    background-color: ${props => props.theme.backgroundColor};
  }
  .ant-pagination-item-active {
    border-color: ${props => props.theme.itemActiveBorderColor}
  }

  .ant-pagination-item:hover,
  .ant-pagination-prev:hover a,
  .ant-pagination-next:hover a {
    border-color: ${props => props.theme.itemHoverBorderColor}
  }

  .ant-pagination-disabled a {
    border-color: ${props => props.theme.disabledItemBorderColor};
    color: ${props => props.theme.disabledItemColor}
  }
`;

export default StyledPagination;
