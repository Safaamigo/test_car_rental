/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */

import { useState } from "react";

const CheckboxFive = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor="checkboxLabelFive"
        className="flex cursor-pointer select-none items-center text-body-sm font-medium text-dark dark:text-white"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelFive"
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`box mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-primary ${
              isChecked && "!border-4"
            }`}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent"></span>
          </div>
        </div>
        Checkbox Text
      </label>
    </div>
  );
};

export default CheckboxFive;
