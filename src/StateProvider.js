import { createContext, useReducer, useContext } from "react";
export const StateContext = createContext();
export const StateProvider = ({ children, reducer, initialState }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStatValue = () => useContext(StateContext);
