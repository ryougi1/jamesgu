import { createGlobalStyle } from 'styled-components';
import { theme } from '@styles';
import FontFaces from './fonts';
const { colors } = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    color: ${colors.lightestSlate};
    margin: 0 0 10px 0;
  }

  h1 {
    &.big-title {
      font-size: 80px;
      line-height: 1.1;
      margin: 0;
    }
    &.medium-title {
      font-size: 60px;
      line-height: 1.1;
      margin: 0;
    }
  }

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
