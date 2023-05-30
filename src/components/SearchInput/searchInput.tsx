import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next'
import { Box, IconButton } from '@mui/material';
import { TextInputCustom } from '../TextInputCustom/textInputCustom';
import Search from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

interface ISearchInput {
    handleClick?: Function;
}

export const SearchInput: FC<ISearchInput> = (props): ReactElement => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    //destructure props
    const { 
        handleClick = () => navigate("/search")
     } = props;

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
            <IconButton sx={styles.searchIconButton} size="large" onClick={() => handleClick()}>
                <Search sx={styles.icon} />
            </IconButton>
        </Box>
            
    )
}