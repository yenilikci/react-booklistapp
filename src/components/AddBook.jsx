import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const AddBook = () => {
  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //postback block
    dispatch({ type: "ADD_BOOK", book: { title, author } }); //action type param , payload param
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kitap Başlığı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Yazar Adı"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Kitap Ekle" />
    </form>
  );
};

export default AddBook;
