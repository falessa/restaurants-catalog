import React from 'react';
import { Box, ThemeProvider } from '@mui/material'
import { myTheme } from './theme/myTheme';

function Search() {

  return (
    <ThemeProvider theme={myTheme}>
        <Box>
            This is the search page!
        </Box>
    </ThemeProvider>
  );
}

export default Search;
