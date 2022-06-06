import { FC, memo } from "react";
import H2 from "./H2";
type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="shadow-md py-5 px-16 flex justify-between">
      <H2>Codeyogi ToDo</H2>
      <div>
        <div>
          <h3 className="text-red-400 text-lg">
            Complete :<span></span>
          </h3>
          <h3 className="text-green-400 text-lg">
            InComplete : <span></span>
          </h3>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {};

export default memo(Header);
