import React, { useState } from 'react';
import Nav from 'components/Nav/Nav';
import * as S from './Main.style';
import FilterContent from 'components/FilterContent/FilterContent';
import ReqCard from 'components/ReqCard/ReqCard';
import { MATERIAL, PROCESS_METHOD } from 'contants';

function Main() {
  const [isToggled, setIsToggled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleResetActive = () => {
    setIsActive(false);
  };

  return (
    <>
      <Nav />
      <S.Container>
        <S.HeaderTitle>들어온 요청</S.HeaderTitle>
        <S.HeaderDesc>파트너님에게 딱 맞는 요청서를 찾아보세요.</S.HeaderDesc>
        <S.FilteringContainer>
          <S.FilteringBoxWrapper>
            <FilterContent
              title="가공 방식"
              filterData={PROCESS_METHOD}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <FilterContent
              title="재료"
              filterData={MATERIAL}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <S.ResetWrapper onClick={handleResetActive}>
              <S.ResetIcon src="/images/refresh_icon.png" />
              <S.ResetText>필터링 리셋</S.ResetText>
            </S.ResetWrapper>
          </S.FilteringBoxWrapper>
          <S.ToggleWrapper>
            <S.InputWrapper>
              <S.InputCheck
                type="checkbox"
                checked={isToggled}
                onChange={handleToggle}
              />
              <S.Switch />
            </S.InputWrapper>
            <S.ToggleText>상담 중인 요청만 보기</S.ToggleText>
          </S.ToggleWrapper>
        </S.FilteringContainer>
        {/* <S.ReqWrapper>조건에 맞는 견적 요청이 없습니다.</S.ReqWrapper> */}
        <S.CardContainer>
          <ReqCard />
        </S.CardContainer>
      </S.Container>
    </>
  );
}

export default Main;
