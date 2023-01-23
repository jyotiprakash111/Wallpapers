import React, {useState} from 'react';
import {useTheme} from '../theme/ThemeProvider';

export default (WrappedComponent) => {
  const ThemeHOC = (props) => {
    const {colors} = useTheme();
    return <WrappedComponent theme={colors} {...props} />;
  };
  return ThemeHOC;
};