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

    // Update term and city with values from SearchContext if available
    useEffect(() => {
        if (searchContext.term) {
        setTerm(searchContext.term);
        }
        if (searchContext.city) {
        setCity(searchContext.city);
        }
    }, [searchContext.term, searchContext.city]);

    return(
        <Box>
            <TextInputCustom data-test="search-term"
                onChange={(e) => setTerm(e.target.value)}
                placeholder={t("searchInput.searchTerm") || ""}
                value={term}
            />
            <TextInputCustom data-test="search-city"
                onChange={(e) => setCity(e.target.value)}
                placeholder={t("searchInput.city") || ""}
                value={city}
            />
            <IconButton sx={styles.searchIconButton} size="large" onClick={() => handleClick()}>
                <Search sx={styles.icon} />
            </IconButton>
        </Box>
            
    )
}