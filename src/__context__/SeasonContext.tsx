import React, { createContext, useContext } from 'react';
// Use static query to get default data from prismic.

export const SeasonContext = createContext({} as SeasonContextProps);

export const SeasonProvider: React.FC = ({ children }) => {
    const context = {
        currentSeason: {},
        nextSeason: {},
    };

    return (
        <SeasonContext.Provider value={context}>
            {children}
        </SeasonContext.Provider>
    );
};

interface SeasonContextProps {
    currentSeason: any;
    nextSeason: any;
}

export const useSeasonContext = useContext(SeasonContext);
