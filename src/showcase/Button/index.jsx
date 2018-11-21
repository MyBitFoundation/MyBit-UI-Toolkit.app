import React from 'react';
import PropTypes from 'prop-types';
import AntButton from 'antd/lib/button';
import { withTheme } from 'styled-components';
import 'antd/lib/button/style/css';
import ButtonStyle from './styledButton';
import Theme from '../theme';

/**
 * @render react
 * @name Button
 * @description Simple MyBit button
 * @example
 * <Button
 *    type="solid"
 * > 
 *   Solid Button
 * </Button>
 */

const Button = props => (
  <div>
    <ButtonStyle
      theme={
        props.type === 'solid' ?
          { ...Theme.buttons.primary[props.color], ...props.styling } :
          { ...Theme.buttons.secondary.back, ...props.styling }
      }
    >
      <AntButton
        className={props.active ? 'ant-btn--is-active' : undefined}
        {...props}
      >
        {props.children}
      </AntButton>
    </ButtonStyle>
  </div>
);

Button.propTypes = {
  styling: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  color: PropTypes.oneOf(['blue', 'green']),
  type: PropTypes.oneOf(['solid', 'outline']),
  active: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  children: PropTypes.node,
};

Button.defaultProps = {
  styling: {},
  color: 'blue',
  type: 'outline',
  active: 0,
  children: '',
};

export default withTheme(Button);
