import React, { createContext, useReducer } from "react";
import { bookReducer } from "../store/reducers/bookReducer";
import { v1 as uuid } from "uuid";

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  //state,dispatch
  const [books, dispatch] = useReducer(bookReducer, []); //reducer,initalState

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
