import PropTypes from 'prop-types';
import styled from 'styled-components';
import PaginationAnt from 'antd/lib/pagination';
import 'antd/lib/pagination/style/css';

const StyledPagination = styled.div`
  .ant-pagination-item a  {
    color: ${props => props.styling.color}
  }

  .ant-pagination-item{
    border: ${props => props.styling.borderColor}
    background-color: ${props => props.styling.backgroundColor}
  }
  .ant-pagination-item-active{
    border-color: ${props => props.styling.itemActiveBorderColor}
  }

  .ant-pagination-item:hover{
    border-color: ${props => props.styling.itemHoverBorderColor}
  }

  .ant-pagination-disabled a{
    border-color: ${props => props.styling.disabledItemBorderColor}
    color: ${props => props.styling.disabledItemColor}
  }
`;

const Pagination = props => (
  <StyledPagination styling={props.styling}>
    <PaginationAnt {...props} />
  </StyledPagination>
);

Pagination.propTypes = {
  styling: PropTypes.object.isRequired, // eslint-disable-line
};

export default Pagination;
