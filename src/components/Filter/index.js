import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tag as TagAnt } from 'antd';
import 'antd/lib/tag/style/css';

const { CheckableTag } = TagAnt;


const StyledFilter = styled.div`
    display: inline-block;
    margin-top: 10px;

    .ant-tag-checkable{
      background-color: ${props => props.styling.uncheckedState.backgroundColor};
      border-color: ${props => props.styling.uncheckedState.borderColor};
      color: ${props => props.styling.uncheckedState.color};

      &:hover{
        color: ${props => props.styling.hoverState.color};
      }
    }

    .ant-tag-checkable-checked{
      background-color: ${props => props.styling.checkedState.backgroundColor};
      color: ${props => props.styling.checkedState.color};
      border-color: ${props => props.styling.checkedState.borderColor};

      &:hover{
        color: ${props => props.styling.checkedState.color};
      }
    }
`;

const Filter = props => (
  <StyledFilter styling={props.styling}>
    <CheckableTag {...props} />
  </StyledFilter>
);


Filter.propTypes = {
  styling: PropTypes.object.isRequired, // eslint-disable-line
};

export default Filter;
