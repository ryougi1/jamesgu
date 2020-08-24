import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import HanziWriter from 'hanzi-writer';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
const { colors } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.lbg2};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;
const StyledLogo = styled.div`
  width: max-content;
  max-width: 256px;
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #B {
      opacity: 0;
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const divRefGu = useRef();
  const divRefLong = useRef();
  // const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let mounted = true;
    console.log(divRefGu.current);

    // const timeout = setTimeout(() => setIsMounted(true), 10);

    if (mounted) {
      const gu = HanziWriter.create(divRefGu.current, '古', {
        width: 250,
        height: 250,
        padding: 5,
        showOutline: false,
        strokeAnimationSpeed: 2,
        delayBetweenStrokes: 40,
        showCharacter: false,
      });
      const long = HanziWriter.create(divRefLong.current, '龙', {
        width: 250,
        height: 250,
        padding: 5,
        showOutline: false,
        strokeAnimationSpeed: 2,
        delayBetweenStrokes: 40,
        showCharacter: false,
      });

      gu.animateCharacter({
        onComplete: () => {
          console.log('Animate Gu Finished');
          setTimeout(() => {
            long.animateCharacter({
              onComplete: () => {
                console.log('Animate Long Finished');
                setTimeout(() => {
                  finishLoading();
                }, 200);
              },
            });
          }, 500);
        },
      });
      return () => (mounted = false);
      // return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <StyledContainer className="loader">
      <Helmet bodyAttributes={{ class: `hidden` }} />

      {/* <StyledLogo isMounted={isMounted}> */}
      <div ref={divRefGu}></div>
      <div ref={divRefLong}></div>
      {/* </StyledLogo> */}
      {/* <StyledLogo isMounted={isMounted}>{logoDiv}</StyledLogo> */}
    </StyledContainer>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
