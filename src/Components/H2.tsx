import { FC, HTMLAttributes, memo } from "react";
type H2Props = HTMLAttributes<HTMLHeadingElement>;

const H2: FC<H2Props> = ({ children }) => {
  return <div className="text-blue-700 text-xl font-bold">{children}</div>;
};

H2.defaultProps = {};

export default memo(H2);
