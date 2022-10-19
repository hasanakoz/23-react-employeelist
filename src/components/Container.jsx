import Employee from "./Employee";
import data from "../data";
import { useState } from "react";

const Container = () => {
  console.log(data);

  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState(data.slice(0, 5));

  const previousPage = () => {
    let lastIndex = index - 5;
    if (index < 5) {
      lastIndex = 0;
    }
    setIndex(lastIndex);
    setPerson(data.slice(lastIndex, lastIndex + 5));
    console.log(person);
  };

  const nextPage = () => {
    let lastIndex = index + 5;
    if (index > data.length - 6) {
      lastIndex = 0;
    }
    setIndex(lastIndex);
    setPerson(data.slice(lastIndex, lastIndex + 5));
    console.log(person[0]);
  };

  return (
    <>
      <Employee person={person} />
      <div className="button-container">
        <button onClick={previousPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

export default Container;
