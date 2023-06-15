import React, { useContext } from 'react';
import { ThemeProvider } from '@mui/material'
import { myTheme } from './theme/myTheme';
import './config/i18n/i18n';
import { BusinessResultsList } from './components/BusinessResultsList/businessResultsList';
import { SearchContext } from './context/SearchContext';

function Search() {
    const { term, city } = useContext(SearchContext)


    const styles = {
        businessDetailsCard: {

        }
    }
    
    return (
        <ThemeProvider theme={myTheme}>
            <BusinessResultsList />
        </ThemeProvider>
    );
}

export default Search;
