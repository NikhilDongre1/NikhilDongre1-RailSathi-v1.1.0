import React from 'react'
import { useContext, createContext } from "react";

const Rail = createContext();
const RailContext = ({children}) => {

  return (<Rail.Provider>{children} </Rail.Provider>);
}

export default RailContext;
export const RailState = ()=>{
  return useContext(Rail);
}
