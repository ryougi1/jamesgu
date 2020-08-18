import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '@styles';
const { colors } = theme;

const StyledContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: ${colors.grey2};
`;

const Side = ({ children, orientation }) => {
  return (
    <StyledContainer orientation={orientation}>{children}</StyledContainer>
  );
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string,
};

export default Side;
