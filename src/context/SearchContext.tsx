import React, { createContext, FC, ReactElement, PropsWithChildren, useState } from 'react';

export interface ISearchContext {
    term: string,
    city: string,
    setTerm: (term: string) => void,
    setCity: (city: string) => void
}

export const SearchContext = createContext(
    {} as ISearchContext
);

export const SearchContextProvider: FC<PropsWithChildren> = (props): ReactElement => {
    const [term, setTerm] = useState(""); // TODO: initialize blank, just hardcoding for testing purposes
    const [city, setCity] = useState(""); // TODO: initialize blank, just hardcoding for testing purposes

    const setSearchTerm = (searchTerm: string) => {
        setTerm(searchTerm);
    }

    const setSearchCity = (searchCity: string) => {
        setCity(searchCity);
    }

    const searchContextValues: ISearchContext = {
        term,
        city,
        setTerm: setSearchTerm,
        setCity: setSearchCity
    }

    return(
        <SearchContext.Provider value={{  ...searchContextValues }}>
            {props.children}
        </SearchContext.Provider>
    )
}