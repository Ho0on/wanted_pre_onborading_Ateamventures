import React from 'react';
import * as S from './Nav.style';

const Nav = () => {
  return (
    <S.NavContainer>
      <S.Logo src="/images/logo.png" />
      <S.NavList>
        <S.NavItem>
          <S.Img src="/images/Vector.png" />A 가공업체
        </S.NavItem>
        <S.Border />
        <S.NavItem>로그아웃</S.NavItem>
      </S.NavList>
    </S.NavContainer>
  );
};

export default Nav;
