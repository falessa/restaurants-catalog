import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

const styles = {
    common: {
        height: "48px",
        width: "290px",
        borderRadius: "1px",
        border: "none",
        backgroundColor: "white"
    },
  };

interface ITextInputCustom {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
}
  
export const TextInputCustom: FC<ITextInputCustom> = (props): ReactElement => {
    const {
        placeholder = "some placeholder",
        onChange = () => {},
        value=""
    } = props;

    return(
        <TextField
            InputProps={{ sx: styles.common}}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}