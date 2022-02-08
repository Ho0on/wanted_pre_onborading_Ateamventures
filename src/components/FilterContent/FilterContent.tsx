import React, { useState } from 'react';
import * as S from './FilterContent.style';

function FilterContent({
  title,
  filterData,
  isActive,
  setIsActive,
  isOpen,
  setIsOpen,
  checkedArray,
  setCheckedArray,
}: {
  title: string;
  filterData: string[];
  isActive: boolean;
  setIsActive: any;
  isOpen: boolean;
  setIsOpen: any;
  checkedArray: string[];
  setCheckedArray: any;
}): JSX.Element {
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // FIXME
  // map 함수의 대상이 되는 부분을 컴포넌트로 빼서 state 또한 그 갯수만큼 분리하는 것이 아니라
  // filter 함수를 써서 생각하는 부분으로...
  // 이렇게 하면 아마도 로직 거의다 구현될 듯...

  const onCheckedElement = (checked: boolean, item: string) => {
    const newCheckList = checked
      ? [...checkedArray, item]
      : checkedArray.filter(el => el !== item);
    setCheckedArray(newCheckList);
  };

  const isActiveActive = checkedArray.length >= 1;

  return (
    <S.FilterContentContainer title={title}>
      <S.TitleWrapper
        onClick={handleOpen}
        title={title}
        isActive={isActiveActive}
      >
        {!isActiveActive ? (
          <>
            <S.TitleNonActive>{title}</S.TitleNonActive>
            <S.IconDown src="/images/triangle_down_gray.png" />
          </>
        ) : (
          <>
            <S.TitleActive>
              {title}({checkedArray.length})
            </S.TitleActive>
            <S.IconDown src="/images/triangle_down_white.png" />
          </>
        )}
      </S.TitleWrapper>
      {isOpen && (
        <S.ListContainer>
          <S.ListWrapper>
            {filterData.map((el: any, idx: number): any => (
              <S.FilterListContainer key={idx}>
                <S.FilterItem>
                  <S.CheckboxList
                    type="checkbox"
                    checked={checkedArray.includes(el) ? true : false}
                    onChange={e => onCheckedElement(e.target.checked, el)}
                  />
                  <S.ListItem>{el}</S.ListItem>
                </S.FilterItem>
              </S.FilterListContainer>
            ))}
          </S.ListWrapper>
        </S.ListContainer>
      )}
    </S.FilterContentContainer>
  );
}

export default FilterContent;
