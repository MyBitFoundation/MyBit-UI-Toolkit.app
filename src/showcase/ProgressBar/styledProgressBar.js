import styled from 'styled-components';

const StyledProgressBar = styled.div`
    .ant-progress-inner {
        background-color: ${props => props.theme.color};
    }
    .ant-progress-text {
        color: ${props => props.theme.color};
    }
    .ant-progress-success-bg, .ant-progress-bg {
        background-color: ${props => props.theme.progressColor};
    }
    .ant-progress-status-success .ant-progress-bg {
        background-color: ${props => props.theme.successColor};
    }
    .ant-progress-status-exception .ant-progress-bg {
        background-color: ${props => props.theme.exceptionColor};
    }
    .ant-progress-status-success .ant-progress-text {
        color: ${props => props.theme.successColor};
    }
    .ant-progress-status-exception .ant-progress-text {
        color: ${props => props.theme.exceptionColor};
    }
`;

export default StyledProgressBar;
