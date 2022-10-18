import React, { createContext, useState } from 'react'

const initialState = {
    cartItem: {
        dish_name: undefined,
        dish_pic: undefined,
        description: undefined,
        rating: 0,
        count: 1
    },
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
