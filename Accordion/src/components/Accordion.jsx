import React, { useEffect, useState } from "react";
import faq from "../API/faq.json";
import FAQ from "./UI/FAQ";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  //handleButton

  const handleButton = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  // const handleButton = (curElem.id) => {
  //   setActiveId((prevId) => (prevId === id ? false : id));
  // };
  //You can only access object properties inside the function body, not in the parameter list.

  // const handleButton = (curElem) => {
  //   setActiveId((prevId) => (prevId === curElem.id ? false : curElem.id));
  // };

  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          return (
            <FAQ
              key={curElem.id}
              curElem={curElem}
              isActive={activeId === curElem.id}
              onToggle={() => handleButton(curElem.id)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Accordion;
