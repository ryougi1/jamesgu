import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Loader, SidebarLeft, SidebarRight } from '@components';
import { GlobalStyle } from '@styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <div id="root">
      {/* <Head metadata={site.siteMetadata} /> */}

      <GlobalStyle />
      {/* {isLoading && isHome ? (
        <Loader
          finishLoading={() => {
            setIsLoading(false);
          }}
        />
      ) : ( */}
      <StyledContent>
        <SidebarLeft />
        <SidebarRight />

        <div id="content">
          {children}
          {/* <Footer /> */}
        </div>
      </StyledContent>
      {/* )} */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
