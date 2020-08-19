import React from 'react';
import PropTypes from 'prop-types';
import { IconGitHub, IconLinkedin, IconExternal } from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    default:
      return;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
