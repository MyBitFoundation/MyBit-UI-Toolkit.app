import PropTypes from 'prop-types';
import { Tag as TagAnt } from 'antd';
import 'antd/lib/tag/style/css';

import Theme from '../theme';
import StyledFilter from './styledFilter';

const { CheckableTag } = TagAnt;
const Filter = props => (
  <StyledFilter styling={{ ...Theme.filters, ...props.styling }}>
    <CheckableTag {...props} />
  </StyledFilter>
);

Filter.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  styling: PropTypes.object, // eslint-disable-line
};

Filter.defaultProps = {
  checked: false,
  onChange: () => {},
  styling: {},
};

export default Filter;
