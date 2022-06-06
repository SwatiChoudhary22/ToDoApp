import { FC, memo, InputHTMLAttributes } from "react";
type InputProps = {
  value: string;
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ type, placeholder, ...rest }) => {
  return (
    <>
      <input
        placeholder="Todo"
        {...rest}
        type={type || "text"}
        className="border-2 border-blue-700 w-full rounded-md placeholder:text-blue-200"
      ></input>
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
