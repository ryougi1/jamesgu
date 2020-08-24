import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 7 / -1;
      text-align: right;
    }
    ${StyledTechList} {
      justify-content: flex-end;
      li {
        margin-left: ${theme.margin};
        margin-right: 0;
      }
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${StyledImgContainer} {
      grid-column: 1 / 8;
    }
  }
`;
const StyledImgContainer = styled.a`
  ${mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: ${colors.green};
  border-radius: ${theme.radius + 1}px;
  transition: ${theme.transition};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${StyledFeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
`;
const StyledFeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${theme.borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
`;
const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
`;
const StyledProjectName = styled.h5`
  font-size: 28px;
  margin: 0 0 20px;
  color: ${colors.lightestSlate};
`;
const StyledDescription = styled.div`
  ${mixins.boxShadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${colors.lightNavy};
  color: ${colors.lightSlate};
  font-size: ${fontSizes.lg};
  border-radius: ${theme.borderRadius};
  p {
    margin: 0;
  }
  a {
    ${mixins.inlineLink};
  }
`;
const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 25px 0 10px;
  list-style: none;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smish};
    color: ${colors.slate};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: ${colors.lightestSlate};
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const Projects = ({ data }) => {
  const featuredProjects = data.filter(({ node }) => node);

  const revealProjects = useRef([]);

  return (
    <StyledContainer id="projects">
      <Heading>Some of my projects</Heading>

      <div>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover } = frontmatter;

            return (
              <StyledProject
                key={i}
                ref={el => (revealProjects.current[i] = el)}
              >
                <StyledContent>
                  <StyledProjectName>
                    {external ? (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                      >
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </StyledProjectName>
                  <StyledDescription
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  {tech && (
                    <StyledTechList>
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </StyledTechList>
                  )}
                  <StyledLinkWrapper>
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Link"
                      >
                        <FormattedIcon name="GitHub" />
                      </a>
                    )}
                    {external && (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                      >
                        <FormattedIcon name="External" />
                      </a>
                    )}
                  </StyledLinkWrapper>
                </StyledContent>

                <StyledImgContainer
                  href={external ? external : github ? github : '#'}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <StyledFeaturedImg
                    fluid={cover.childImageSharp.fluid}
                    alt={title}
                  />
                </StyledImgContainer>
              </StyledProject>
            );
          })}
      </div>
    </StyledContainer>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;
