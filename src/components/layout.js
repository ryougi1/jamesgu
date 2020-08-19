import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SidebarLeft, SidebarRight } from '@components';
import { GlobalStyle } from '@styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  console.log(children);

  return (
    <div id="root">
      {/* <Head metadata={site.siteMetadata} /> */}

      <GlobalStyle />

      {/* <SkipToContent href="#content">Skip to Content</SkipToContent> */}
      <StyledContent>
        <SidebarLeft />
        {/* {/* <Social isHome={isHome} /> */}
        <SidebarRight />

        <div id="content">
          {children}
          {/* <Footer /> */}
        </div>
      </StyledContent>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
