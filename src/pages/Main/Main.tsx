import React, { useState } from 'react';
import Nav from 'components/Nav/Nav';
import * as S from './Main.style';
import FilterContent from 'components/FilterContent/FilterContent';
import ReqCard from 'components/ReqCard/ReqCard';
import { MATERIAL, PROCESS_METHOD } from 'contants';
import useFetch from 'hooks/useFetch';

interface Root {
  requests: Request[];
}

interface Request {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}
function Main() {
  const [isMethodActive, setIsMethodActive] = useState(false);
  const [isMethodOpen, setIsMethodOpen] = useState(false);
  const [isMaterialActive, setisMaterialActive] = useState(false);
  const [isMaterialOpen, setIsMaterialOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const { data, error, isLoading }: { data: any; error: any; isLoading: any } =
    useFetch('http://localhost:3001/');

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleReset = () => {
    setIsMethodActive(false);
    setisMaterialActive(false);
    setIsMethodOpen(false);
    setIsMaterialOpen(false);
  };

  return (
    <>
      <Nav />
      <S.Container>
        <S.HeaderTitle>들어온 요청</S.HeaderTitle>
        <S.HeaderDesc>파트너님에게 딱 맞는 요청서를 찾아보세요.</S.HeaderDesc>
        ddd
        <S.FilteringContainer>
          <S.FilteringBoxWrapper>
            <FilterContent
              title="가공 방식"
              filterData={PROCESS_METHOD}
              isActive={isMethodActive}
              setIsActive={setIsMethodActive}
              isOpen={isMethodOpen}
              setIsOpen={setIsMethodOpen}
            />
            <FilterContent
              title="재료"
              filterData={MATERIAL}
              isActive={isMaterialActive}
              setIsActive={setisMaterialActive}
              isOpen={isMaterialOpen}
              setIsOpen={setIsMaterialOpen}
            />
            <S.ResetWrapper onClick={handleReset}>
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
        {data && (
          <S.ReqWrapper>
            {!data ? (
              <S.Span>조건에 맞는 견적 요청이 없습니다.</S.Span>
            ) : (
              <S.CardContainer>
                {data.map((el: any) => {
                  return <ReqCard item={el} />;
                })}
              </S.CardContainer>
            )}
          </S.ReqWrapper>
        )}
      </S.Container>
    </>
  );
}

export default Main;
