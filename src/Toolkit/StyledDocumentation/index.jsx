import styled from 'styled-components';

const StyledDocumentation = styled.div`
  padding: 10px 40px;
  border-radius: 23px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 12px 0px;
  ${props => props.menuOpen === true && `
    opacity: 0;
    transition: all 0.2s;
  `}

  @media(min-width: 768px) {
    opacity: 1;
  }

  @media(max-width: 768px) {
    box-shadow: none;
    padding: 0px 0px;
  }

  h1{
    font-size: 30px;
    color: #4a4a4a;
    font-weight: 700;
    margin-top: 40px;
  }

  section{
    margin-top: 50px;
    padding-left: 10px;

    h2{
      font-weight: 400;
      color: #4a4a4a;
      margin-bottom: 20px;
    }
  }
`;

export default StyledDocumentation;
