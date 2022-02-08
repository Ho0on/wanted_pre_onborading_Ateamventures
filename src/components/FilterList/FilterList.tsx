import React, { useState } from 'react';
import * as S from './FilterList.style';

function FilterList({ filterData, isActive, setIsActive }: any) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    setIsActive(true);
  };

  return (
    <S.FilterListContainer>
      <S.FilterItem>
        <S.CheckboxList
          type="checkbox"
          checked={isSelected}
          onChange={handleSelect}
        />
        <S.ListItem>{filterData}</S.ListItem>
      </S.FilterItem>
    </S.FilterListContainer>
  );
}

export default FilterList;
