import React, { FC, ReactElement } from 'react';
import avocadoHeart from '../../resources/images/avocado_heart.png';

import { Box } from '@mui/material';
import { Image } from 'mui-image';
import { LanguageSelector } from '../LanguageSelector/languageSelector';

export const Header: FC = (): ReactElement => {
    return(
        <Box 
            display='flex'
            flexDirection='row'
            alignItems='flex-start'
            mt={2}
            padding={2}
        >
            <Image 
                src={avocadoHeart}
                height='100px'
                width='100px'
                alt='restaurant-catalog-logo'
            />
            <LanguageSelector />

        </Box>
    )
}