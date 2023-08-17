import React, { useEffect, useState } from "react";
import axios from "axios";
const INter = () => {
  const [counter, setCounter] = useState(0);
  // const ApiData = async () => {
  //   let res = await axios.get("https://dummyjson.com/products");
  //   setData(res?.data["products"]);
  // };

  const handelCount = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    
  }, [counter]);

  return (
    <>
      {/* {data?.map((item, index) => {
        return (
          <div className="Api_Container" key={index}>
            <li>{.title}</li>
          </div>
        );
      })} */}
      <div>{counter}</div>
      <button onClick={handelCount}>Increment</button>
    </>
  );
};

export default INter;
