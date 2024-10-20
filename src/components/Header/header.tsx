import React, { FC, ReactElement } from 'react';
import yelpLogo from '../../resources/images/yelp_logo.png';
import { Box } from '@mui/material';
import { Image } from 'mui-image';
import { LanguageSelector } from '../LanguageSelector/languageSelector';
import { SearchInput } from '../SearchInput/searchInput';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header: FC = (): ReactElement => {
    const navigate = useNavigate();
    const location = useLocation();

    const shouldDisplaySearchInput = location.pathname !== '/';
    
    const styles = {
        headerBox: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "15px",
            padding: "2px"
        }
    }

    return(
        <Box
            data-test="app-header"
            sx={styles.headerBox} 
        >
            <Box
                data-test="app-logo"
                onClick={() => navigate("/")}
            >
                <Image
                src={yelpLogo}
                height='50px'
                width='140px'
                alt='restaurant-catalog-logo'
                />
            </Box>
            {shouldDisplaySearchInput &&
                <Box>
                    <SearchInput />
                </Box>
            }
            <Box>
                <LanguageSelector />
            </Box>
        </Box>
    )
}