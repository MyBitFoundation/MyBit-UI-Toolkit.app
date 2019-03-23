import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import PaginationAnt from 'antd/lib/pagination';
import 'antd/lib/pagination/style/css';
import StyledPagination from './styledPagination';
import Theme from '@mybit/ui.theme/build';

const Pagination = props => (
  <StyledPagination theme={{ ...props.theme.pagination, ...props.styling }}>
    <PaginationAnt {...props} />
  </StyledPagination>
);

Pagination.propTypes = {
  theme: PropTypes.object, // eslint-disable-line
  styling: PropTypes.object, // eslint-disable-line
};

Pagination.defaultProps = {
  theme: Theme,
  styling: {}
};

export default withTheme(Pagination);
