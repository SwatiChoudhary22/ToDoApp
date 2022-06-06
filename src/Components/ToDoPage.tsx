import React, { FC, memo, useState } from "react";
import Button from "./Button/Button";
import Checkbox from "./Checkbox";
import H1 from "./H1";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
type ToDoPageProps = {
  onClose: boolean;
};

const ToDoPage: FC<ToDoPageProps> = (props) => {
  const [showTodoFormVisible, setShowTodoFormVisible] = useState(false);
  const ShowTodoForm = () => {
    setShowTodoFormVisible(true);
  };
  const HideTodoForm = () => {
    setShowTodoFormVisible(false);
  };
  return (
    <>
      <Header></Header>

      <div className="px-16 mt-16">
        <H1>Things to get done</H1>
        <div className="flex  items-center">
          <Checkbox></Checkbox>
          <h3>hello</h3>
        </div>

        {!showTodoFormVisible && (
          <Button onClick={ShowTodoForm}>
            <span className="text-2xl">+</span> Add a Todo
          </Button>
        )}
        {showTodoFormVisible && <ToDoForm onClose={HideTodoForm}></ToDoForm>}
      </div>
    </>
  );
};

ToDoPage.defaultProps = {};

export default memo(ToDoPage);
