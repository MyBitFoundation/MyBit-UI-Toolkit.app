import styled from 'styled-components';

const StyledSubscribeForm = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    display: none;
  }

`;

export default StyledSubscribeForm;