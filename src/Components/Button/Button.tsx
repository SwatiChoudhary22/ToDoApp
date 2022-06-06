import { ButtonHTMLAttributes, FC, memo } from "react";
import cn from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  theme?: "primary" | "secondary";
  onClick: React.MouseEvent<HTMLElement>;
};

const Button: FC<ButtonProps> = ({ theme, onClick, ...rest }) => {
  const themeClasses = theme === "primary" ? "bg-blue-700 " : "bg-blue-400";
  return (
    <>
      <button
        onClick={onClick}
        {...rest}
        className={cn(
          " text-white hover:bg-blue-300 shadow-2xl focus:ring-blue-700 px-3 py-2 rounded-lg focus:ring-2 focus:outline-none ",
          themeClasses
        )}
      ></button>
    </>
  );
};

Button.defaultProps = {};

export default memo(Button);
