import React from 'react';

const FilterButton = ({type,sorteByType}) => {
    return (
    <button onClick={()=> sorteByType(type)}>{type}</button>
    )
}

export default FilterButton