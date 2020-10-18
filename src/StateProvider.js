// We  need it to setup data layout
// so as to track the basket

import React, { createContext, useContext, useReducer} from 'react';

// THIS IS THE DATA LAYOUT
export const StateContext = createContext();

// BUILD A PROVIDER TO WRAP THE ENTIRE APP IN THE PROVIDER

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider> 
);

// THIS IS HOW WE USE IT INSIDE OF A COMPONENT
export const useStateValue = () => useContext(StateContext);

