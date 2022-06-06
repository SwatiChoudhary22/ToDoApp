import { FC, memo } from "react";
import ToDo from "../Modals/TodoModel";
import cn from "classnames";
type TodoProps = {
  todo: ToDo;
};

const TodoRow: FC<TodoProps> = ({ todo }) => {
  const { id, title, done } = todo;
  return (
    <>
      <div key="id" className="flex items-center">
        <input
          type="checkbox"
          checked={done}
          className="border-2 border-blue-700 rounded"
        />

        <p className={cn("ml-2", { "line-through": done })}> {title}</p>
      </div>
    </>
  );
};

TodoRow.defaultProps = {};

export default memo(TodoRow);
