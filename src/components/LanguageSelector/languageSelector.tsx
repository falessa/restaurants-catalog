import React, { FC, ReactElement } from 'react';
import './../../config/i18n/i18n';
import { useTranslation } from 'react-i18next'
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';

interface ILanguageSelector {
    languages?: string[]
}

export const LanguageSelector: FC<ILanguageSelector> = (props): ReactElement => {
    const { t } = useTranslation();

    return(
        <FormControl fullWidth>
            <InputLabel id="select-language-input label">{t("languageSelector.language")}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={1}
                label={t("languageSelector.language")}
                onChange={()=> console.log(`onChange languageSelector`)}
            >
                <MenuItem value={'en'}>{t("languageSelector.english")}</MenuItem>
                <MenuItem value={'es'}>{t("languageSelector.spanish")}</MenuItem>
            </Select>
        </FormControl>
    )

};