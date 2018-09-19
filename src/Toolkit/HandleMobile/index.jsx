import { createGlobalStyle } from 'styled-components';

const HandleMobile = createGlobalStyle`
  #root>div>div>div:nth-child(1){
    width: 250px;
    transition: all 0.2s;
    border-right: none;

    ${props => props.menuOpen === true && `
      width: 0px;
    `}

    @media(max-width: 768px) {
      width: 0px;
      transition: all 0.2s;
      ${props => props.menuOpen === true && `
          width: 100%;
      `}
    }
  }
`;

export default HandleMobile;
