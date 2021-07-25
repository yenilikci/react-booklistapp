import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../store/reducers/bookReducer";
import { v1 as uuid } from "uuid";

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  //state,dispatch
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  }); //reducer,initalState,localStorage data return

  useEffect(() => {
    //localStorage set
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
