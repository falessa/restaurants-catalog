import React from 'react';
import { Box, ThemeProvider } from '@mui/material'
import { myTheme } from './theme/myTheme';
import { useTranslation } from 'react-i18next';
import './config/i18n/i18n';
import { BusinessMainDetailsCard } from './components/BusinessMainDetailsCard/businessMainDetailsCard';

function Search() {
    const { t } = useTranslation();

    const styles = {
        businessDetailsCard: {

        }
    }
    
    return (
        <ThemeProvider theme={myTheme}>
            <BusinessMainDetailsCard />
        </ThemeProvider>
    );
}

export default Search;
