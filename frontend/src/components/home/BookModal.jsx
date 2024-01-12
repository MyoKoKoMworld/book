import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { PiBookBookmarkLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      onClick={onClose}
      className=" fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
    >
      <div
        onClick={(event) => event.stopPropagation}
        className=" w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          onClick={onClose}
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
        />

        <h2 className="w-fit px-4 py-1 rounded-lg bg-red-300">
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
      </div>
    </div>
  );
};

export default BookModal;
