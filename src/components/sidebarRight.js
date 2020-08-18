import React from 'react';
import PropTypes from 'prop-types';
import { email } from '@config';
import { Side } from '@components';
import styled from 'styled-components';
import { theme } from '@styles';
const { colors, fonts, fontSizes } = theme;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 140px;
    margin: 0 auto;
    background-color: ${colors.grey2};
  }
`;

const StyledEmailLink = styled.a`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  color: ${colors.yellow};
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
`;

const SidebarRight = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <StyledEmailLink href={`mailto:${email}`}>{email}</StyledEmailLink>
    </StyledLinkWrapper>
  </Side>
);

SidebarRight.propTypes = {
  isHome: PropTypes.bool,
};

export default SidebarRight;
