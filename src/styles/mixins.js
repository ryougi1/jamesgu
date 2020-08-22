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

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.grey2};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.yellow};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.yellow} !important;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.yellow};
      opacity: 0.5;
    }
  `,
  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.yellow};
      outline: 0;
    }
  `,
  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.lg};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors.yellow};
      }
    }
  `,
};

export default mixins;
