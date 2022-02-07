import React from 'react';
import Nav from 'components/Nav/Nav';
import * as S from './Main.style';

const Main = () => {
  return (
    <>
      <Nav />
      <S.Container>
        <S.HeaderTitle>들어온 요청</S.HeaderTitle>
        <S.HeaderDesc>파트너님에게 딱 맞는 요청서를 찾아보세요.</S.HeaderDesc>
        <S.ReqWrapper>조건에 맞는 견적 요청이 없습니다.</S.ReqWrapper>
      </S.Container>
    </>
  );
};

export default Main;
