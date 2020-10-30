import React, { useEffect, createContext, useReducer } from "react";
import Reducer from "../reducer/Reducer";


const initialState = {
    options: []
};

const Store = ({ children }) => {
    const [ state, dispatch ] = useReducer(Reducer, initialState, () => {
        const persistedData = localStorage.getItem("state");
        return persistedData ? JSON.parse(persistedData) : []
    });

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));
    }, [state]);

    return (
        <Context.Provider value={[ state, dispatch ]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);

export default Store;