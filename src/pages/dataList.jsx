import React, { useState } from "react";
import "../App.css";

const DataList = () => {
  const d = localStorage.getItem("data");
  const [buttons, setButtons] = useState(d.split(","));
  const [draggedButton, setDraggedButton] = useState(null);

  const handleDragStart = (index) => {
    setDraggedButton(index);
  };

  const handleDragOver = (index) => {
    if (draggedButton === null) return;

    const newButtons = [...buttons];
    const draggedItem = newButtons[draggedButton];

    newButtons.splice(draggedButton, 1); // Remove the dragged item
    newButtons.splice(index, 0, draggedItem); // Insert the dragged item at the new position

    setButtons(newButtons);
    setDraggedButton(index);
  };

  const handleDragEnd = () => {
    setDraggedButton(null);
  };

  return (
    <div>
      <h1>Drag and drop Details List at any position</h1>
      {buttons.map((button, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDragEnd={handleDragEnd}
          className="dragbutton"
        >
          {button}
        </div>
      ))}
    </div>
  );
};

export default DataList;
