import React, { useState, useEffect } from "react";
import LoadingButton from "./LoadingButton";
import ConfirmPage from "./ConfirmPage";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setIsLoading(true);
    e.preventDefault();
    // Make an API call or perform any other async task
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000);

    // if (isLoading) {
    // Make an API call or perform any other async task
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
        console.log(data);
        setOpen(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        setOpen(false);
      });
    // }
  };

  //   useEffect(() => {

  //   }, [isLoading]);

  return (
    <div>
      <form onSubmit={handleClick}>
        <LoadingButton
          onClick={handleClick}
          buttonText="FETCH DATA"
          isLoading={isLoading}
          loadingText="FETCHING DATA"
        />
      </form>

      <ConfirmPage open={open} />
    </div>
  );
};

export default LoadingPage;
