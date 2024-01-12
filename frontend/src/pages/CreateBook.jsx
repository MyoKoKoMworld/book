import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicYear, setPublicYear] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publicYear,
    };

    setLoading(true);

    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Creation Success", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        enqueueSnackbar("Book Creation Error", { variant: "error" });
      });
  };
  return (
    <div className=" p-4">
      <BackButton />
      <h1 className=" text-3xl my-4">Create Book</h1>
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
            className=" bg-sky-500 p-2 text-white"
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
