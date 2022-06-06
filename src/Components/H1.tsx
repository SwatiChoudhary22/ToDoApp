import { FC, HTMLAttributes, memo } from "react";
type H1Props = HTMLAttributes<HTMLHeadingElement>;

const H1: FC<H1Props> = ({ children }) => {
  return (
    <div className="text-3xl text-blue-900 font-extrabold">{children}</div>
  );
};

H1.defaultProps = {};

export default memo(H1);
