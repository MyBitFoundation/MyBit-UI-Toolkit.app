import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 90px;
  background-image: linear-gradient(to right, #0b3f9c, #2e58db);
  margin: 0px 0px;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LogoColumn = styled.div`
  flex: 0 1 120px;
  padding: 0 12px 0px 24px;
`;
export const ExchangeRateColumn = styled.div`
  flex: 1 150px;
  padding: 0 12px 0px 12px;
  min-width: 150px;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const AccountColumn = styled.div`
  margin-left: auto;
  margin-right: 10px;
  min-width: 300px;
`;
