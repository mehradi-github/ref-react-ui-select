import { FC, Fragment, useCallback, useEffect, useRef, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");

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

  const handleAddNewItem = () => {
    const v = inputValue.trim();
    if (v !== "" && !availableOptions.includes(v)) {
      setAvailableOptions((perv) => [...perv, v]);
      setInputValue("");
    }
    // console.log(availableOptions.join(","));
  };

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
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddNewItem();
              }}
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
