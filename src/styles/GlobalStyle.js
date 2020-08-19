import { createGlobalStyle } from 'styled-components';
import { theme } from '@styles';
const { colors } = theme;

const GlobalStyle = createGlobalStyle`
a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${colors.yellow};
    }
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
