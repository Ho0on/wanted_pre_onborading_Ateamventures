import React, { useState } from 'react';
import * as S from './FilterContent.style';
import FilterList from 'components/FilterList/FilterList';

function FilterContent({
  title,
  filterData,
  isActive,
  setIsActive,
}: {
  title: string;
  filterData: string[];
  isActive: boolean;
  setIsActive: any;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // const handleActive = () => {
  //   setIsActive(!isActive);
  // };

  // FIXME
  // map 함수의 대상이 되는 부분을 컴포넌트로 빼서 state 또한 그 갯수만큼 분리하는 것이 아니라
  // filter 함수를 써서 생각하는 부분으로...
  // 이렇게 하면 아마도 로직 거의다 구현될 듯...

  return (
    <S.FilterContentContainer title={title}>
      <S.TitleWrapper onClick={handleOpen} title={title} isActive={isActive}>
        {!isActive ? (
          <>
            <S.TitleNonActive>{title}</S.TitleNonActive>
            <S.IconDown src="/images/triangle_down_gray.png" />
          </>
        ) : (
          <>
            <S.TitleActive>{title}(1)</S.TitleActive>
            <S.IconDown src="/images/triangle_down_white.png" />
          </>
        )}
      </S.TitleWrapper>
      {isOpen && (
        <S.ListWrapper>
          {filterData.map((el: any, idx: any): any => (
            <FilterList
              key={idx}
              filterData={el}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          ))}
        </S.ListWrapper>
      )}
    </S.FilterContentContainer>
  );
}

export default FilterContent;
