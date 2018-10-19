import styled from 'styled-components';
import { Menu } from 'antd';
import 'antd/lib/style/css';

const MenuItem = styled(Menu.Item)`
  margin-right: 50px;
  padding: 0px 0px;

  a{
    color: ${props => props.styling ? props.styling.color : "inherit" /*eslint-disable-line*/} !important;

    &:hover{
      color:${props => props.styling ? props.styling.itemSelectedColor : "inherit" /*eslint-disable-line*/} !important;
    }
  }
`;

export default MenuItem;
