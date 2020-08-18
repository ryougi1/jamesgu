import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;
  }
`;

export default GlobalStyle;
