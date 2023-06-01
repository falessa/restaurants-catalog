import React from 'react';
import { Box, ThemeProvider } from '@mui/material'
import { myTheme } from './theme/myTheme';
import { useTranslation } from 'react-i18next';
import './config/i18n/i18n';

function Search() {
    const { t } = useTranslation();
    
    return (
        <ThemeProvider theme={myTheme}>
            <Box>
                {t("main.title")}
            </Box>
        </ThemeProvider>
    );
}

export default Search;
