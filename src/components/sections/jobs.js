import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledTab = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;
const StyledTabList = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledTabButton = styled.button`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  border-left: 2px solid ${colors.grey2};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.sm};
  color: ${props => (props.isActive ? colors.yellow : colors.grey2)};
  &:hover,
  &:focus {
    background-color: ${colors.lbg1};
  }
`;
const StyledHighlight = styled.span`
  display: block;
  background: ${colors.yellow};
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
const StyledTabContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 12px;
  padding-left: 30px;
  ul {
    ${mixins.fancyList};
  }
  a {
    ${mixins.inlineLink};
  }
  &:hover,
  &:focus {
    border-width: 0px;
  }
`;
const StyledJobTitle = styled.h4`
  color: ${colors.grey2};
  font-size: ${fontSizes.xxl};
  font-weight: 500;
  margin-bottom: 5px;
`;
const StyledJobDetails = styled.h5`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.sm};
  font-weight: normal;
  letter-spacing: 0.05em;
  color: ${colors.grey3};
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;

const Jobs = ({ data }) => {
  const [activeTabId, setActiveTabId] = useState(0);
  const tabs = useRef([]);
  // console.log(tabs);
  // console.log(data);

  return (
    <StyledContainer id="jobs">
      <Heading>Experience</Heading>
      <StyledTab>
        <StyledTabList role="tablist" aria-label="Job tabs">
          {data &&
            data.map(({ node }, i) => {
              const { company } = node.frontmatter;
              return (
                <li key={i}>
                  <StyledTabButton
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    ref={el => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role="tab"
                    aria-selected={activeTabId === i ? true : false}
                    aria-controls={`panel-${i}`}
                    tabIndex={activeTabId === i ? '0' : '-1'}
                  >
                    {company}
                  </StyledTabButton>
                </li>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        {data &&
          data.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, url, company, range } = frontmatter;
            return (
              <StyledTabContent
                key={i}
                isActive={activeTabId === i}
                id={`panel-${i}`}
                role="tabpanel"
                aria-labelledby={`tab-${i}`}
                tabIndex={activeTabId === i ? '0' : '-1'}
                hidden={activeTabId !== i}
              >
                <StyledJobTitle>
                  {title}
                  &nbsp;@&nbsp;
                  <a
                    href={url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    {company}
                  </a>
                </StyledJobTitle>
                <StyledJobDetails>{range}</StyledJobDetails>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </StyledTabContent>
            );
          })}
      </StyledTab>
    </StyledContainer>
  );
};

Jobs.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Jobs;
