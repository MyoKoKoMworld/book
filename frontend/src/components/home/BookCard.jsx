import React from "react";

import BookSingle from "./BookSingle";
const BookCard = ({ books }) => {
  return (
    <div className="  grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingle book={item} key={item._id} />
      ))}
    </div>
  );
};

export default BookCard;
