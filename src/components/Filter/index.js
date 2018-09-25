import PropTypes from 'prop-types';
import { Tag as TagAnt } from 'antd';
import 'antd/lib/tag/style/css';

import StyledFilter from './styledFilter';

const { CheckableTag } = TagAnt;
const Filter = props => (
  <StyledFilter styling={props.styling}>
    <CheckableTag {...props} />
  </StyledFilter>
);

Filter.propTypes = {
  styling: PropTypes.object.isRequired, // eslint-disable-line
};

export default Filter;
