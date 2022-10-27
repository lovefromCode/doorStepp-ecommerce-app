import React, { createContext, useState } from 'react'

const initialState = {
    cartItems: []
    // {
    //     category: undefined,
    //     description: undefined,
    //     price: undefined,
    //     title: undefined,
    //     rating: undefined,
    //     image: undefined,
    // }
};

export const GlobalContextObj = createContext(initialState);

export const GlobalContextProvider = props => {
    const [state, setState] = useState(initialState);
    const globalChangeState = value =>
        setState(prevState => {
            return {
                ...prevState,
                ...value,
            };
        });

    return (
        <GlobalContextObj.Provider value={{ ...state, globalChangeState }}>{props.children}</GlobalContextObj.Provider>
    );
};
