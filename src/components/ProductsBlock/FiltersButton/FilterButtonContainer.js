import React from "react";
import FilterButton from "./FilterButton.js";

const FilterButtonContainer = ({ allTypes, sorteByType }) => {
  console.log(allTypes);
  const allButtons = allTypes.map((type) => {
    return (
      <FilterButton
        key={Math.random() * 100}
        type={type}
        sorteByType={sorteByType}
      />
    );
  });
  return <>{allButtons} </>;
};

export default FilterButtonContainer;
