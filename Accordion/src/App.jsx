import React from "react";
import Accordion from "./components/Accordion";
import "./App.css";
const App = () => {
  return (
    <div>
      <h1>Accordion</h1>
      <p>
        An accordion is a UI component that allows users to expand and collapse
        sections of content. It is commonly used to display information in a
        compact and organized manner. Users can click on the headers of the
        accordion sections to reveal or hide the content within those sections.
      </p>
      <Accordion />
    </div>
  );
};

export default App;
