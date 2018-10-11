import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .ant-tooltip {
    .ant-tooltip-inner{
      background-color: #ffffff;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
    }

    .ant-tooltip-arrow{
      border-top-color: #ffffff !important;
      border-bottom-color: #ffffff !important;
    }

    .ant-tooltip-inner{
      word-break: break-word !important;
    }
  }
`;

export default GlobalStyle;
