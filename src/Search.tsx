import React, { useContext } from 'react';
import { Typography, ThemeProvider } from '@mui/material'
import { myTheme } from './theme/myTheme';
import { useTranslation } from 'react-i18next';
import './config/i18n/i18n';
import { BusinessResultsList } from './components/BusinessResultsList/businessResultsList';
import { SearchContext } from './context/SearchContext';

function Search() {
    const { t } = useTranslation();
    const { term, city } = useContext(SearchContext)


    const styles = {
        businessDetailsCard: {

        }
    }
    
    return (
        <ThemeProvider theme={myTheme}>
            <Typography>
                {`You're looking for ${term} in ${city}`}
            </Typography>
            <BusinessResultsList />
        </ThemeProvider>
    );
}

export default Search;
