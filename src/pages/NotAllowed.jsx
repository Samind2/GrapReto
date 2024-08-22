import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotAllowed = () => {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      navigate("/");
    }, 5000);

    const countDown = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 1) {
          clearInterval(countDown);
          return 0;
        }
        return prevCounter - 1;
      }, 1000);
      return () => {
        clearInterval(timer);
        clearInterval(countDown);
      };
    }, [navigate]);
  });

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NotAllowed;
