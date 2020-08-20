import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: ${fontSizes.h};

  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: 10px;
    font-family: ${fonts.SFMono};
    font-weight: normal;
    color: ${colors.yellow};
    font-size: ${fontSizes.xl};
    position: relative;
    bottom: 4px;
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${colors.grey2};
    position: relative;
    top: -5px;
    margin-left: 20px;
  }
`;

export default Heading;
