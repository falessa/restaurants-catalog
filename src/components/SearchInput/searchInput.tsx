import React, { FC, ReactElement, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { Box, IconButton } from '@mui/material';
import { TextInputCustom } from '../TextInputCustom/textInputCustom';
import Search from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

interface ISearchInput {
    handleClick?: Function;
}

export const SearchInput: FC<ISearchInput> = (props): ReactElement => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [term, setTerm] = useState("");
    const [city, setCity] = useState("");

    const searchContext = useContext(SearchContext);

    //destructure props
    const { 
        handleClick = () => {
            searchContext.setTerm(term);
            searchContext.setCity(city);
            navigate("/search")
        }
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
            <TextInputCustom
                onChange={(e) => setTerm(e.target.value)}
                placeholder={t("searchInput.searchTerm") || ""}
            />
            <TextInputCustom
                onChange={(e) => setCity(e.target.value)}
                placeholder={t("searchInput.city") || ""}
            />
            <IconButton sx={styles.searchIconButton} size="large" onClick={() => handleClick()}>
                <Search sx={styles.icon} />
            </IconButton>
        </Box>
            
    )
}