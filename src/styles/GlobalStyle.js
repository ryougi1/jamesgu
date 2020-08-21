import { createGlobalStyle } from 'styled-components';
import FontFaces from './fonts';
import theme from './theme';
const { colors, fonts, fontSizes } = theme;

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

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.lbg2};
    color: ${colors.grey2};
    line-height: 1.3;
    font-family: ${fonts.Calibre};
    font-size: ${fontSizes.xl};
    &.hidden {
      overflow: hidden;
    }
  }

  gatsby-image-outer-wrapper {
    height: 100%;
  }
`;

export default GlobalStyle;
