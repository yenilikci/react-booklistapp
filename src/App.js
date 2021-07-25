import { BookContextProvider } from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <AddBook />
      </BookContextProvider>
    </div>
  );
}

export default App;
