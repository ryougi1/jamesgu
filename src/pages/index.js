import React from "react";
import styled from "styled-components";
import { Hero } from "@components";

const StyledMainContainer = styled.main`
  counter-reset: section;
  padding: 0 100px;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;

  &.fillHeight {
    padding-top: 0;
    padding-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const IndexPage = ({ location, data }) => (
  <StyledMainContainer className="fillHeight">
    <Hero data={data.hero.edges} />
  </StyledMainContainer>
);

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            buttonText
            text
          }
          html
        }
      }
    }
  }
`;
