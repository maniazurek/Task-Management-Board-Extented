import React, { useState } from "react";
import uniqid from "uniqid";

import Main from "./components/Main";
import Navigation from "./components/Navigation";
import FormTask from "./components/FormTask";
import SimpleTask from "./components/SimpleTask";

const App = () => {
  const [tasksList, setTasksList] = useState([]);

  const handleFormSubmit = (
    event,
    title,
    date,
    assignee,
    description,
    link,
    tags,
    columns,
    comments
  ) => {
    event.preventDefault();
    const newTask = {
      title,
      date,
      assignee,
      description,
      link,
      tags,
      columns,
      comments,
    };
    setTasksList([...tasksList, newTask]);
  };

  return (
    <>
      <div className="header">
        <Navigation />
        <FormTask handleFormSubmit={handleFormSubmit} />
        <Main />
      </div>
      {tasksList.map((task) => {
        return (
          <SimpleTask
            key={uniqid()}
            title={task.title}
            description={task.description}
            link={task.link}
            tags={task.tags}
            date={task.date}
            assignee={task.assignee}
            columns={task.columns}
            comments={task.comments}
          />
        );
      })}
    </>
  );
};

export default App;
