import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const AddBook = () => {
  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //postback block
    addBook(title, author);
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
