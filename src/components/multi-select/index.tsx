import { FC, Fragment, useCallback, useEffect, useRef, useState } from "react";
import "./multiselect.scss";
import { Icons } from "../icons";

interface MultiSelectProps {
  options?: string[];
}
const MultiSelect: FC<MultiSelectProps> = ({
  options: initialOptions = [],
}) => {
  // const [availableOptions, setAvailableOptions] =
  //   useState<string[]>(initialOptions);
  const [isOpen, setIsOpen] = useState(true);

  const refDropdown = useRef<HTMLDivElement>(null);
  const refInput = useRef<HTMLInputElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refDropdown.current &&
        !refDropdown.current.contains(event.target as Node)
      )
        closeDropdown();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDropdown]);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="dp-container" ref={refDropdown}>
      <button onClick={toggleDropdown}>
        Science
        <Icons.chevronDown className="chevron" />
      </button>

      {isOpen && (
        <div className="menu">
          <div className="container">
            <input
              ref={refInput}
              type="text"
              value=""
              onChange={() => {}}
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
      )}
    </div>
  );
};
export default MultiSelect;
