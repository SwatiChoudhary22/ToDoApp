import { FC, memo, useState } from "react";
import Button from "./Button/Button";
import H2 from "./H2";
import Input from "./Input";
type ToDoFormProps = {
  value: string;
} & React.MouseEvent<HTMLElement>;

const ToDoForm: FC<ToDoFormProps> = (props) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event: React.MouseEvent<HTMLElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="shadow-2xl bg-sky-100 w-1/2 px-10 py-5 rounded-lg space-y-5 min-w-max">
      <H2>Things to do</H2>
      <Input value={inputValue} type="text"></Input>
      <div className="flex space-x-5">
        <Button theme="secondary">Save</Button>
        <Button onClick={props.onClick}>Cancel</Button>
      </div>
    </div>
  );
};

ToDoForm.defaultProps = {};

export default memo(ToDoForm);
