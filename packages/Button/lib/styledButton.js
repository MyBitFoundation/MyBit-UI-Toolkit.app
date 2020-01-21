import styled from 'styled-components';
import 'antd/lib/button/style/css';

const MyBitButtonStyle = styled.div`
  .ant-btn{
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    border-color: ${props => props.theme.borderColor};
    font-size: 14px;
    line-height: 1.5;
    &:focus,
    &:hover{
      background-color: ${props => props.theme.backgroundColorHover};
      border-color: ${props => props.theme.borderColorHover};
      color: ${props => props.theme.colorHover};
    }
    &--is-active,
    &:active{
      color: ${props => props.theme.colorActive};
      background-color: ${props => props.theme.backgroundColorActive};
      border-color: ${props => props.theme.borderColorActive};
    }
  }
  .ant-btn-clicked:after{
    border: 0 solid ${props => props.theme.color};
  }
`;

export default MyBitButtonStyle;