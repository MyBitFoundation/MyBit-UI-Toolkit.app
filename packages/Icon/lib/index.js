import React from 'react';
import PropTypes from 'prop-types';
import { Icon as IconAnt } from 'antd';
import 'antd/lib/icon/style/css';
import styled from 'styled-components';

const StyledIconRight = styled(IconAnt)`
    margin-left: 5px;
`;

const Icon = ({ isRight, type }) => (
    isRight ? <StyledIconRight type={type} /> : <IconAnt type={type} />
);


Icon.propTypes = {
    isRight: PropTypes.bool,
    type: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    isRight: false,
};

export default Icon;