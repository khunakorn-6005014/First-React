import React, { useState, useEffect } from 'react';

const UseEffectComponent = () => {
  const [count, setCount] = useState("");
//const [count, setCount] = useState(0);

//useEffect Without Dependencies
  useEffect(() => { //
    console.log("init Called");
    return () => {
      console.log("cleanup called");
    };
  }, []);
//useEffect with Dependencies
  useEffect(() => {
    console.log("count is mounted",count);
  }, [count]);

  return (
    <div>
      <input type="text" onChange={(e) => setCount(e.target.value)} />
    </div>
  );
};
//<input type="text" onChange={(e) => setCount(Number(e.target.value))} />
export default UseEffectComponent;
