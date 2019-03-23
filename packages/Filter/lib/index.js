import React from 'react';
import PropTypes from 'prop-types';
import { Tag as TagAnt } from 'antd';
import 'antd/lib/tag/style/css';
import { withTheme } from 'styled-components';
import Theme from '@pbteja-dev/ui.kit.theme/build';

import StyledFilter from './styledFilter';

const { CheckableTag } = TagAnt;
const Filter = props => (
  <StyledFilter theme={{ ...props.theme.filters, ...props.styling }}>
    <CheckableTag {...props} />
  </StyledFilter>
);

Filter.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  styling: PropTypes.object, // eslint-disable-line
  theme: PropTypes.object, // eslint-disable-line
};

Filter.defaultProps = {
  checked: false,
  onChange: () => {},
  styling: {},
  theme: Theme,
};

export default withTheme(Filter);
