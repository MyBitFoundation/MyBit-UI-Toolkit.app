import styled from 'styled-components';

const StyledCircleIndicator = styled.div`
  width: 6px;
  height: 6px;
  background-color: ${props => props.circleColor};
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
`;

export default StyledCircleIndicator;
