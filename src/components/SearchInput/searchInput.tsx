import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next'
import { Box, IconButton } from '@mui/material';
import { TextInputCustom } from '../TextInputCustom/textInputCustom';
import Search from '@mui/icons-material/Search';

export const SearchInput: FC = (): ReactElement => {
    const { t } = useTranslation();

    const styles = {
        searchBox: {
            display: 'flex',
            justifyContent: 'center',

        },
        searchIconButton: {
            backgroundColor: "red",
            borderRadius: "1px",
            width: "55px",
            size: "large"
        },
        icon: {
            color: "white"
        }
    }

    return(
        <Box sx={styles.searchBox}>
            <TextInputCustom placeholder={t("searchInput.searchTerm") || ""}/>
            <TextInputCustom placeholder={t("searchInput.city") || ""}/>
            <IconButton sx={styles.searchIconButton} size="large">
                <Search sx={styles.icon} />
            </IconButton>
        </Box>
            
    )
}