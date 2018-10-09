/**
* @render react
* @name Button
* @example
* <Button styling={{
*   color: 'white',
*   colorHover: 'white',
*   colorActive: 'white',
*   backgroundColor: 'blue',
*   backgroundColorHover: 'blue',
*   backgroundColorActive: 'blue',
*   borderColor: 'blue',
*   borderColorHover: 'blue',
*   borderColorActive: 'blue',
* }}> This is our Button </Button>
*/

import React from 'react';
import PropTypes from 'prop-types';
import AntButton from 'antd/lib/button';
import ButtonStyle from './styledButton';
import Theme from '../theme';

const Button = props => (
  <div>
    <ButtonStyle
      styling={
        props.type === 'solid' ?
          { ...Theme.buttons.primary[props.color], ...props.styling } :
          { ...Theme.buttons.secondary.back, ...props.styling }
      }
    >
      <AntButton
        className={props.active ? 'ant-btn--is-active' : ''}
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
  active: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  styling: {},
  color: 'blue',
  type: 'outline',
  active: false,
  children: '',
};

export default Button;
