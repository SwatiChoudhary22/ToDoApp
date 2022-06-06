import { FC, memo } from "react";
import ToDo from "../Modals/TodoModel";
import TodoRow from "./TodoRow";
type TodoListProps = {
  todos: ToDo[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      <div>
        {todos.map((t) => (
          <TodoRow key={t.id} todo={t} />
        ))}
      </div>
    </>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);
