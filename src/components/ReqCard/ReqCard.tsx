import React from 'react';
import * as S from './ReqCard.style';

const ReqCard = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TopWrapper>
          <S.Title>자동차 시제품 제장</S.Title>
          <S.Client>A 고객사</S.Client>
          <S.DueDate>2020.12.14까지 납기</S.DueDate>
        </S.TopWrapper>
        <S.InfoContainer>
          <S.Type>
            <S.Work>도면개수</S.Work>
            <S.Work>총 수량</S.Work>
            <S.Work>가공방식</S.Work>
            <S.Work>재료</S.Work>
          </S.Type>
          <S.Things>
            <S.Info>2개</S.Info>
            <S.Info>100개</S.Info>
            <S.Info>밀링, 선반</S.Info>
            <S.Info>알루미늄</S.Info>
          </S.Things>
        </S.InfoContainer>
        <S.ButtonContainer>
          <S.List>요청 내역 보기</S.List>
          <S.Chat>채팅하기</S.Chat>
        </S.ButtonContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default ReqCard;
