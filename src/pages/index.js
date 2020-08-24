import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Projects } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
  padding: 0 150px;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding-top: 200px;
  padding-bottom: 200px;
  &.fillHeight {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <Jobs data={data.jobs.edges} />
      {/* <Projects data={data.projects.edges} /> */}
    </StyledMainContainer>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
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
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 90
                  traceSVG: { color: "#64ffda" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
            hobbies
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
  }
`;

// projects: allMarkdownRemark(
//   filter: { fileAbsolutePath: { regex: "/projects/" } }
//   sort: { fields: [frontmatter___id], order: DESC }
// ) {
//   edges {
//     node {
//       frontmatter {
//         title
//         cover {
//           childImageSharp {
//             fluid(
//               maxWidth: 700
//               quality: 90
//               traceSVG: { color: "#64ffda" }
//             ) {
//               ...GatsbyImageSharpFluid_withWebp_tracedSVG
//             }
//           }
//         }
//         tech
//         github
//         external
//       }
//       html
//     }
//   }
// }
