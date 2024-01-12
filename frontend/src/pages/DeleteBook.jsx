import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const deleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("an error occure.please check in console");
      });
  };
  return (
    <div className=" p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" flex flex-col items-center border-2 border-sky-400 w-[600px] mx-auto p-4 rounded-md">
          <h1 className=" text-2xl">
            Are you sure you went to delete this book
          </h1>
          <button
            onClick={deleteBook}
            className=" p-4 bg-red-600 text-white m-8 w-full"
          >
            Yes, delete it
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
