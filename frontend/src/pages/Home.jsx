import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BookTable from "../components/home/BookTable";
import BookCard from "../components/home/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(books);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          onClick={() => setShowType("table")}
          className=" bg-sky-200 px-2 py-1 rounded-md hover:bg-sky-300"
        >
          Table
        </button>
        <button
          onClick={() => setShowType("card")}
          className=" bg-sky-200 px-2 py-1 rounded-md hover:bg-sky-300"
        >
          Card
        </button>
      </div>
      <div className=" flex items-center justify-between">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to={"/books/create"}>
          <MdOutlineAddBox className=" text-sky-500 text-4xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType == "table" ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
};

export default Home;
