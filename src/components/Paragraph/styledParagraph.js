import styled from 'styled-components';

const MyBitParagraphStyle = styled.p`
  font-family: 'Roboto';
  color: ${props => props.styling.color};
  font-size: ${props => props.styling.fontSize};
`;

export default MyBitParagraphStyle;
