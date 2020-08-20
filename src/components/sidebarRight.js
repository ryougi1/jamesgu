import React from 'react';
import { email } from '@config';
import styled from 'styled-components';
import { theme } from '@styles';
const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 20px;
  color: ${colors.grey2};
`;

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
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
`;

const SidebarRight = () => (
  <StyledContainer>
    <StyledLinkWrapper>
      <StyledEmailLink href={`mailto:${email}`}>{email}</StyledEmailLink>
    </StyledLinkWrapper>
  </StyledContainer>
);

export default SidebarRight;
