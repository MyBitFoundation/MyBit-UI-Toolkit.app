import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import TooltipAnt from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/css';

const GlobalStyle = createGlobalStyle`
  .ant-tooltip {
    .ant-tooltip-inner{
      background-color: #ffffff;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
    }

    .ant-tooltip-arrow{
      border-top-color: #ffffff !important;
      border-bottom-color: #ffffff !important;
    }

    .ant-tooltip-inner{
      word-break: break-word !important;
    }
  }
`;

const Tooltip = ({
  children, title, arrowPointAtCenter, placement,
}) => (
  <Fragment>
    <TooltipAnt
      title={title}
      arrowPointAtCenter={arrowPointAtCenter}
      placement={placement}
    >
      {children}
    </TooltipAnt>
    <GlobalStyle />
  </Fragment>
);

Tooltip.propTypes = {
  title: PropTypes.string, // eslint-disable-line react/forbid-prop-types
  arrowPointAtCenter: PropTypes.bool,
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']),
};

Tooltip.defaultProps = {
  title: '',
  arrowPointAtCenter: false,
  placement: 'top',
};

export default Tooltip;
