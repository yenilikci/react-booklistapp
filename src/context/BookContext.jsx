import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: "Dönüşüm", author: "Franz Kafka" },
    { id: 2, title: "Hayvan Çiftliği", author: "George Orwell" },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { id: uuid(), title, author }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
