import styled from 'styled-components';

const StyledHeading = styled.div`
  h1, h2, h3,
  h4, h5, h6{
    font-family: 'Gilroy', 'Roboto';
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${props => props.styling.color};
  }
`;

export default StyledHeading;
