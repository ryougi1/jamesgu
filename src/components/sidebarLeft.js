import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { navLinks, socialMedia } from '@config';
import { FormattedIcon, IconLogo } from '@components/icons';
import { theme, mixins } from '@styles';
const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 100vh;
  left: 20px;
  right: auto;
  z-index: 1;
  font-family: ${fonts.SFMono};
  color: ${colors.grey2};
`;
const StyledTop = styled.nav`
  position: relative;
  width: 100%;
  top: 0;
  z-index: 2;
  font-size: ${fontSizes.sm};
  &:before {
    content: '';
    display: block;
    width: 1px;
    height: 140px;
    margin: 0 auto;
    background-color: ${colors.grey2};
  }
`;
const StyledBottom = styled.div`
  position: relative;
  width: 100%;
  bottom: 0
  z-index: 2;
  color: ${colors.grey2};
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 140px;
    margin: 0 auto;
    background-color: ${colors.grey2};
  }
`;
const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledLink = styled(Link)`
  padding: 15px 3px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;
const StyledSMLink = styled.a`
  padding: 15px 3px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledResumeButton = styled.a`
  ${mixins.smallButton};
`;
const StyledLogo = styled.div`
  ${mixins.flexCenter};
  padding: 20px 0px 10px 0px;
  a {
    display: block;
    width: 60px;
    height: 60px;
  }
`;

const SidebarLeft = () => (
  <StyledContainer>
    <StyledTop>
      <StyledLogo tabindex="-1">
        <a href="/" aria-label="home">
          <IconLogo />
        </a>
      </StyledLogo>
      <StyledList>
        {navLinks &&
          navLinks.map(({ url, name }, i) => (
            <StyledLink key={i} to={url}>
              {name}
            </StyledLink>
          ))}
        <StyledResumeButton
          href="/resume.pdf"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Resume
        </StyledResumeButton>
      </StyledList>
    </StyledTop>
    <StyledBottom>
      <StyledList>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <StyledSMLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                <FormattedIcon name={name} />
              </StyledSMLink>
            </li>
          ))}
      </StyledList>
    </StyledBottom>
  </StyledContainer>
);

export default SidebarLeft;
