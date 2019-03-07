import styled from 'styled-components';

export const PortfolioTile = styled.div`
  height: 78px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 283px;
`;
export const StyledChildDiv = styled.div`
  width: 70%;
`;
export const PortfolioTileImg = styled.img`
  height: 27px;
  width: 30px;
`;
export const ValueB = styled.b`
  color: ${props => props.color}
`;
export const ValueP = styled.p`
  padding: 2px 0px;
  margin: 0px 0px;
  color: #575757;
  line-height: 0.9;
`;

export const EmptyP = styled.p`
    color: #575757;
    background-color: #f5f7fa;
    text-align: right;
    font-size: 16px;
    line-height: 22px !important;
    padding-top: 22px !important;
    padding-bottom: 22px !important;
    padding-right: 31px !important;
`;

