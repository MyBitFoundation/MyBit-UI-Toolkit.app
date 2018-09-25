import PropTypes from 'prop-types';
import PaginationAnt from 'antd/lib/pagination';
import 'antd/lib/pagination/style/css';
import StyledPagination from './styledPagination';

const Pagination = props => (
  <StyledPagination styling={props.styling}>
    <PaginationAnt {...props} />
  </StyledPagination>
);

Pagination.propTypes = {
  styling: PropTypes.object.isRequired, // eslint-disable-line
};

export default Pagination;
