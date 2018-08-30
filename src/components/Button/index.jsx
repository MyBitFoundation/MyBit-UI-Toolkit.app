import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import styled from 'styled-components';
import 'antd/lib/button/style/css';

const MyBitButtonStyle = styled.div`
  .ant-btn{
    color: ${props => props.styling.color};
    background-color: ${props => props.styling.backgroundColor};
    border-color: ${props => props.styling.borderColor};
    font-size: 14px;
    line-height: 1.5;
    &:focus,
    &:hover{
      background-color: ${props => props.styling.backgroundColorHover};
      border-color: ${props => props.styling.borderColorHover};
      color: ${props => props.styling.colorHover};
    }
    &--is-active,
    &:active{
      color: ${props => props.styling.colorActive};
      background-color: ${props => props.styling.backgroundColorActive};
      border-color: ${props => props.styling.borderColorActive};
    }
  }
  .ant-btn-clicked:after{
    border: 0 solid ${props => props.styling.color};
  }
`;

const MyBitButton = ({
  children, styling, size, isActive, handleRoute, disabled,
}) => (
  <div>
    <MyBitButtonStyle styling={styling}>
      <Button
        size={size}
        className={isActive ? 'ant-btn--is-active' : ''}
        onClick={handleRoute}
        disabled={disabled}
      >
        {children}
      </Button>
    </MyBitButtonStyle>
  </div>
);

MyBitButton.propTypes = {
  styling: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  handleRoute: PropTypes.func,
  size: PropTypes.string,
  isActive: PropTypes.bool,
};

MyBitButton.defaultProps = {
  handleRoute: () => {},
  size: 'small',
  disabled: false,
  isActive: false,
};

export default MyBitButton;
