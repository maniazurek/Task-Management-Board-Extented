import React from "react";

import addImage from "../assets/add.png";
import ToDoSection from "./ToDoSection";

const Main = ({ addTaskOpen, tasksList, onTaskSelect }) => {
  return (
    <div className="main-content">
      <ToDoSection
        columnName="to do"
        tasksList={tasksList.filter((task) => task.column.name === "to do")}
        onTaskSelect={onTaskSelect}
      />
      <ToDoSection
        columnName="in progress"
        tasksList={tasksList.filter(
          (task) => task.column.name === "in progress"
        )}
        onTaskSelect={onTaskSelect}
      />
      <ToDoSection
        columnName="done"
        tasksList={tasksList.filter((task) => task.column.name === "done")}
        onTaskSelect={onTaskSelect}
      />
      <button onClick={addTaskOpen} className="main-content__add-task">
        <img className="main-content__add-icon" src={addImage} />
      </button>
    </div>
  );
};

export default Main;
