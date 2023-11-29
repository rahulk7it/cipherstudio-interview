import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BeforeSaveDataList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    "List items are composed of selection icon and name columns at minimum.",
    "Avoid using file type icon overlays to denote status of a file as it can make the entire icon unclear.",
    "If there are multiple lines of text in a column consider the variable row height variant.",
    " Give columns ample default width to display information.",
  ]);

  const saveData = () => {
    localStorage.setItem("data", data);
    navigate("/datalist");
  };
  return (
    <div>
      <h1>All list</h1>
      {data.map((button, index) => (
        <div key={index} className="dragbutton">
          {button}
        </div>
      ))}

      <button
        style={{ marginTop: "2rem" }}
        className="btncls"
        onClick={saveData}
      >
        Submit
      </button>
    </div>
  );
};

export default BeforeSaveDataList;
