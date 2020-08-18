import { css } from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  bigButton: css`
    color: ${colors.yellow};
    background-color: transparent;
    border: 1px solid ${colors.yellow};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
  `,

  smallButton: css`
    color: ${colors.yellow};
    background-color: transparent;
    border: 1px solid ${colors.yellow};
    border-radius: ${theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: 13px;
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
  `,
};

export default mixins;
