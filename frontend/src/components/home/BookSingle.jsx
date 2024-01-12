import React, { useState } from "react";
import { PiBookBookmarkLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";
const BookSingle = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative border-2 border-gray-500  px-4 py-2 m-4 rounded-lg ">
      <h2 className="absolute top-1 right-2 px-4 py-1 rounded-lg bg-red-300">
        {book.publicYear}
      </h2>
      <h4 className=" my-2  text-gray-500">{book._id}</h4>

      <div className=" flex items-center justify-start gap-x-2">
        <PiBookBookmarkLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>

      <div className=" flex items-center justify-start gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>

      <div className=" flex items-center justify-start gap-x-2 mt-4 p-4">
        <BiShow
          onClick={() => setShowModal(true)}
          className=" text-3xl text-blue-800 hover:text-black cursor-pointer"
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-sky-500 hover:text-black" />
        </Link>

        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-black" />
        </Link>

        <Link to={`/books/delete/:${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-500 hover:text-black" />
        </Link>
      </div>

      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingle;
