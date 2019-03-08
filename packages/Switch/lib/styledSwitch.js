import styled from 'styled-components';

const StyledSwitch = styled.div`
  display: inline-block;
  .ant-switch{
    background-color: ${props => props.theme.uncheckedBackgroundColor};
  }
  .ant-switch-checked{
    background-color: ${props => props.theme.checkedBackgroundColor};
  }
  .ant-btn-clicked:after{
    border: 0 solid ${props => props.theme.checkedBackgroundColor};
  }
`;

export default StyledSwitch;
