import React from "react";

const Spinner = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className=" animate-ping rounded-full w-16 h-16 m-8 bg-sky-500"></div>
    </div>
  );
};

export default Spinner;
