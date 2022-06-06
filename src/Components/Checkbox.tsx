import { FC, memo, InputHTMLAttributes } from "react";
type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ type, ...rest }) => {
  return (
    <>
      <input
        {...rest}
        type="checkbox"
        className="border-2 border-blue-700 rounded"
      ></input>
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
