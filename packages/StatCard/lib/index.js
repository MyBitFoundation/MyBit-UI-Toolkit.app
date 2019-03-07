import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Skeleton } from 'antd';
import 'antd/lib/skeleton/style/css';
import StyledStatCard from './styledStatCard';
import StyledTitle from './styledTitle';
import StyledValue from './styledValue';
import StyledLoadingPlaceholder from './styledPlaceholder';
import Theme from './theme';

const StatCard = ({ stat, theme, styling }) => (
    <StyledStatCard theme={{...theme.statCard, ...styling}}>
        <StyledTitle theme={{...theme.statCard, ...styling}}>{stat.name}</StyledTitle>
        <StyledLoadingPlaceholder>
            { (stat.value !== undefined) && <StyledValue theme={{...theme.statCard, ...styling}}>{stat.value}</StyledValue> }
            { (stat.value === undefined) && <Skeleton active title={false} paragraph={{ rows: 1, width: '100%'}}/> }
        </StyledLoadingPlaceholder>
    </StyledStatCard>
);
StatCard.propTypes = {
    stat: PropTypes.object.isRequired, //eslint-disable-line
    theme: PropTypes.object, // eslint-disable-line,
    styling: PropTypes.object // eslint-disable-line
};
StatCard.defaultProps = {
    theme: Theme,
    styling: {}
};

export default withTheme(StatCard);