import React, { useState } from 'react';
import styled from 'styled-components';

function FilterList({ filterData, isActive, setIsActive }: any) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    setIsActive(true);
  };

  return (
    <FilterListContainer>
      <FilterItem>
        <CheckboxList
          type="checkbox"
          checked={isSelected}
          onChange={handleSelect}
        />
        <ListItem>{filterData}</ListItem>
      </FilterItem>
    </FilterListContainer>
  );
}

const FilterListContainer = styled.li``;

const FilterItem = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxList = styled.input``;

const ListItem = styled.div`
  padding: 2px 0 0 2px;
  font-size: 14px;
  line-height: 20px;
`;

export default FilterList;
