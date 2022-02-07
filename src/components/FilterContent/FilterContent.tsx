import React, { useState } from 'react';
import styled from 'styled-components';
import FilterList from 'components/FilterList/FilterList';

interface TitleWrapperType {
  title: string;
  isActive: any;
}

function FilterContent({ title, filterData }: any): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
    <FilterContentContainer title={title}>
      <TitleWrapper onClick={handleOpen} title={title} isActive={isActive}>
        {!isActive ? (
          <>
            <TitleNonActive>{title}</TitleNonActive>
            <IconDown src="/images/triangle_down_gray.png" />
          </>
        ) : (
          <>
            <TitleActive>{title}(1)</TitleActive>
            <IconDown src="/images/triangle_down_white.png" />
          </>
        )}
      </TitleWrapper>
      {isOpen && (
        <ListWrapper>
          {filterData.map((el: any, idx: any): any => (
            <FilterList
              key={idx}
              filterData={el}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          ))}
        </ListWrapper>
      )}
    </FilterContentContainer>
  );
}

const FilterContentContainer = styled.div`
  position: ${({ title }) => title === '재료' && 'relative'};
  left: ${({ title }) => title === '재료' && '10px'};
`;

const TitleWrapper = styled.div<TitleWrapperType>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ title }) => (title === '재료' ? '76px' : '98px')};
  height: 32px;
  padding: 4px 12px;
  border: ${({ isActive }) =>
    isActive ? '1px solid transparent' : '1px solid #939fa5'};
  border-radius: 4px;
  color: ${({ isActive }) => isActive && 'white'};
  background-color: ${({ isActive }) => isActive && '#1565C0'};
  cursor: pointer;

  &:hover {
    border: 1px solid #2196f3;
  }
`;

const IconDown = styled.img`
  width: 14px;
  height: 14px;
`;

const TitleActive = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
`;

const TitleNonActive = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
`;

const ListWrapper = styled.ul`
  position: relative;
  top: 4px;
  width: 100px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  z-index: 100;
`;

export default FilterContent;
