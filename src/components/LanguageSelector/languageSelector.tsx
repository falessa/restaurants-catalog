import React, { FC, ReactElement, useState } from 'react';
import './../../config/i18n/i18n';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface ILanguageSelector {
    languages?: string[]
}

export const LanguageSelector: FC<ILanguageSelector> = (props): ReactElement => {
    const { t } = useTranslation();
    const supportedLanguagesArray = Object.keys(i18next.services.resourceStore.data)

    // returns 'en' language when i18next.language is not supported to set the initial value in the Select component
    const getValidLanguage = () => {
        const languageCode = i18next.language.split('-')[0]; // get language code without region

        if (supportedLanguagesArray.includes(languageCode)) {
            return languageCode;
        }

        return 'en';
    }
    
    const [language, setLanguage] = useState(getValidLanguage());

    const handleOnChange = (event: SelectChangeEvent) => {
        const newLanguage = event.target.value as string;
        setLanguage(newLanguage);
        i18next.changeLanguage(newLanguage);
    }

    const languageMenuItems = supportedLanguagesArray.map((langCode, i) => (
        <MenuItem key={langCode} value={langCode}>
          {t("languageSelector." + supportedLanguagesArray[i])}
        </MenuItem>
      ));

    return(
        <Box
            width='20%'
            border='none'
            sx={{
                ".MuiOutlinedInput-notchedOutline": { // deletes the border from the Language Select component
                    border: 'none'
                  }
            }}
        >
            <FormControl fullWidth>
                <InputLabel id="select-language-input label">{t("languageSelector.language")}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Label"
                    onChange={handleOnChange}
                >
                    {languageMenuItems}
                </Select>
            </FormControl>
        </Box>
    )

};