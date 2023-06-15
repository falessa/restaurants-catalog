import React from 'react';
import { ThemeProvider } from '@mui/material';
import { myTheme } from './theme/myTheme';
import { BusinessResultsList } from './components/BusinessResultsList/businessResultsList';

function Search() {
    return (
        <ThemeProvider theme={myTheme}>
            <BusinessResultsList />
        </ThemeProvider>
    );
}

export default Search;
