import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  max-width: 120px;
  text-align: center;
  text-decoration: none;
  flex: 1 1;
`;

export const StyledNavOption = styled.div`
  height: 100%;
  width: max-content;
  margin: 0 auto;
  padding: 0px 4px;
  color: ${props => (props.selectable ? '#125ac4' : '#d9d9d9')};
  border-bottom: ${props => (props.selected ? '3px solid #125ac4' : 'none')};
`;

export const StyledImg = styled.img`
  height: 25px;
  margin-top: 18px;
`;

export const StyledP = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  margin-top: 5px;
`;
