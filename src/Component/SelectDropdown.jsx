/** @format */

import { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const SelectDropdown = ({ classOptions, placeholder, selectOption }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Map classOptions to react-select format
  const options = classOptions.map((item) => ({
    value: item.value,
    label: (
      <div className='flex items-center gap-2'>
        <img src={item.logo} alt='' className='w-7 h-7' />
        <span>{item.label}</span>
      </div>
    ),
  }));

  const handleChange = (selected) => {
    if (!selected) {
      setSelectedOption(null);
      return;
    }
    setSelectedOption(selected);
    selectOption(selected.value); // Call the parent function with the selected option
    console.log("Selected:", selected.value); // or selected.label if needed
  };
  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={handleChange}
      placeholder={placeholder}
      isClearable
      classNames={{
        control: ({ isFocused }) =>
          `input input-bordered input-primary w-full bg-white ${
            isFocused ? "ring ring-primary" : ""
          }`,
        option: ({ isFocused, isSelected }) =>
          `px-3 py-2 cursor-pointer ${
            isSelected
              ? "bg-primary text-white"
              : isFocused
              ? "bg-primary/20"
              : ""
          }`,
        menu: () => "bg-white shadow-md mt-1 rounded-md z-50",
        singleValue: () => "flex items-center gap-2",
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          primary25: "#c3dafe", // light blue for focus
          primary: "#3b82f6", // Tailwind blue-500
        },
      })}
    />
  );
};
//  classNames={{
//         control: () => "border border-gray-300 shadow-sm",
//         menu: () => "z-50",
//       }}
SelectDropdown.propTypes = {
  classOptions: PropTypes.arrayOf(
    PropTypes.shape({
      class_name: PropTypes.string.isRequired,
      class_logo: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
};

export default SelectDropdown;
