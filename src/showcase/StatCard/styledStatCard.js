import styled from 'styled-components';

const StyledStatCard = styled.div`
  border-radius: 4px;
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 5px;
  width: 180px;
  height: 87px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  vertical-align: middle;
  flex-grow: 1;
  flex-basis: 0;
`;

export default StyledStatCard;
