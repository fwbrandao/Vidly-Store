import React from "react";

const FilterGenre = ({
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem
  }) => {
  return (
    <ul className="list-group">

      {items.map(item => (
        <li
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

FilterGenre.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};

export default FilterGenre;
