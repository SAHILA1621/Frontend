// src/components/FilterDropdown.js

import React from 'react';

const FilterDropdown = ({ onChange }) => {
  const handleSelectChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <div className="filter-dropdown">
      <select onChange={handleSelectChange}>
        <option value="">All Locations</option>
        <option value="New York">New York</option>
        <option value="London">London</option>
        {/* Add more location options as needed */}
      </select>
    </div>
  );
};

export default FilterDropdown;
