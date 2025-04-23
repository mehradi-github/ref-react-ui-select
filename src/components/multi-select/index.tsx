import { FC, Fragment, useState } from "react";
import "./multiselect.scss";
import { Icons } from "../icons";

interface MultiSelectProps {
  options?: string[];
}
const MultiSelect: FC<MultiSelectProps> = ({
  options: initialOptions = [],
}) => {
  const [availableOptions, setAvailableOptions] =
    useState<string[]>(initialOptions);

  return (
    <div className="dp-container">
      <button>
        Science
        <Icons.chevronDown className="chevron" />
      </button>

      <div className="menu">
        <div className="container">
          <input
            type="text"
            value=""
            placeholder="Add new item and press Enter..."
          />
          <div className="scroll-area">
            <div className="options">
              <Fragment key="">
                <button>
                  Education 🎓
                  <Icons.check className="check" />
                </button>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MultiSelect;
