import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
const ShowBook = () => {
  const { id } = useParams();

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`).then((res) => {
      setBook(res.data);
      setLoading(false);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className=" text-3xl my-4 ">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl p-4 w-fit">
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>

          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>

          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>

          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Public Year</span>
            <span>{book.publicYear}</span>
          </div>

          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Created Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>

          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">
              Last Update Time
            </span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
