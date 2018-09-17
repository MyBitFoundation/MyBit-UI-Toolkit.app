import styled from 'styled-components';

const StyledMenuButton = styled.a`
  width: 20px;
  height: 20px;
  position: fixed;
  right: 20px;
  top: 20px;
  transition: all 0.2s;
  transition-delay: 0.1s;
  z-index: 1000;
  opacity: 0;
  background-image: url('/static/menu-icon.svg');
  background-repeat: no-repeat;

  ${props => props.menuOpen === true && `
      background-image: url('/static/close.svg');
  `}

  @media(max-width: 768px) {
    opacity: 1;
  }
`;

export default StyledMenuButton;
