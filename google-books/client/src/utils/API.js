import axios from "axios";

export default {
  // get books from the Google API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // get all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // delete the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // save a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
