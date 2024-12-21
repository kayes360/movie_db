'use client'
import React from "react";

import { ComparisonContext } from "../context";
import { useEffect, useReducer, useState } from "react";
import { compareReducer, initialState } from "../reducer/compareReducer";

 
export default function StateProvider({ children }) {
    const [state, dispatch] = useReducer(compareReducer, initialState);
     
  return (
    <ComparisonContext.Provider value={{ state, dispatch }}>
      {children}
    </ComparisonContext.Provider>
  );
}
