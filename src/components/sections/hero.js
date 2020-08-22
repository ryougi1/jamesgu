import React from 'react';
import { email } from '@config';
import styled from 'styled-components';
import { theme, mixins, Section } from '@styles';
import PropTypes from 'prop-types';

const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 50px 0px 150px 0px;
  div {
    width: 100%;
  }
`;
const StyledOverline = styled.h1`
  color: ${colors.yellow};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
`;
const StyledTitle = styled.h2`
  font-size: 80px;
  font-family: ${fonts.Calibre};
  line-height: 1.1;
  margin: 0;
  color: ${colors.grey4};
`;
const StyledSubtitle = styled.h3`
  font-size: 80px;
  font-family: ${fonts.Calibre};
  line-height: 1.1;
  color: ${colors.grey2};
`;
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.md};
`;
const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node;
  const { title, name, subtitle, text, buttonText } = frontmatter;

  return (
    <StyledContainer>
      <StyledOverline>{title}</StyledOverline>
      <StyledTitle>{name}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledDescription>{text}</StyledDescription>
      <div>
        <StyledEmailLink href={`mailto:${email}`}>{buttonText}</StyledEmailLink>
      </div>
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
