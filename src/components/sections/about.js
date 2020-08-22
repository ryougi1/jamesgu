import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { theme, mixins, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
`;
const StyledContent = styled.div`
  width: 60%;
  max-width: 480px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledDescription = styled.div`
  margin-top: 15px;
  font-family: ${fonts.Calibre};
  font-size: ${fontSizes.xl};
  color: ${colors.grey2};
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.sm};
  color: ${colors.slate};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.yellow};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`;
const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 40px;
`;
const StyledAvatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  border-radius: ${theme.borderRadius};
  z-index: 10;
`;
const StyledBoxBorder = styled.div`
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  margin-left: -20px;
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
  }
  &:after {
    border: 2px solid ${colors.yellow};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
  &:before {
    border: 2px solid ${colors.yellow};
    top: -20px;
    left: -20px;
    z-index: -1;
  }
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills, avatar, hobbies } = frontmatter;

  return (
    <StyledContainer id="about">
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
          <StyledDescription>{hobbies}</StyledDescription>
        </StyledContent>
        <StyledPic>
          <StyledBoxBorder>
            <StyledAvatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </StyledBoxBorder>
        </StyledPic>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
