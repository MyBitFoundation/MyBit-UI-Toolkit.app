import styled from 'styled-components';

const StyledNavBar = styled.div`
  height: 100vh;

  h1{
    font-family: 'Roboto';
    font-weight: 600;
    padding: 20px;
    font-size: 25px;
  }

  li{
    list-style-type: none;
    font-size: 18px;
    padding: 12px 0px;
    position: relative;

    & a{
      color: rgba(0,0,0,.65);
    }

    .active{
      color: #1890ff;
      text-decoration: none;
      position: relative;
      font-weight: bold;
    }
  }
`;


export default StyledNavBar;
