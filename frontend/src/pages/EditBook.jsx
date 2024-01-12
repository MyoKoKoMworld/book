import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicYear, setPublicYear] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setTitle(res.data.title);
        setPublicYear(res.data.publicYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("An error occure. please check in console");
        setLoading(false);
      });
  }, []);

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publicYear,
    };

    setLoading(true);

    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("An error happened.Please Xheck console");
      });
  };
  return (
    <div className=" p-4">
      <BackButton />
      <h1 className=" text-3xl my-4">Edit Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="border-2  flex flex-col  border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className=" text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              value={title}
              className=" border-2 border-gray-500 px-4 py-2 w-full"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="my-4">
            <label className=" text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              value={author}
              className=" border-2 border-gray-500 px-4 py-2 w-full"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="my-4">
            <label className=" text-xl mr-4 text-gray-500">Public Year</label>
            <input
              type="text"
              value={publicYear}
              className=" border-2 border-gray-500 px-4 py-2 w-full"
              onChange={(e) => setPublicYear(e.target.value)}
            />
          </div>

          <button
            className=" bg-sky-500 text-xl p-2 text-white"
            onClick={handleSaveBook}
          >
            Save Change
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
