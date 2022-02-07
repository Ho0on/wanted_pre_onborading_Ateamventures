import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 40px;
  background-color: ${props => props.theme.color.blue};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

export const Logo = styled.img`
  width: 153px;
`;

export const Img = styled.img`
  width: 16px;
  margin-right: 8px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
  font-weight: ${props => props.theme.fontWeight.normal};
`;

export const NavItem = styled.div``;

export const Border = styled.span`
  height: 16px;
  margin: 0px 32px;
  border-right: 2px solid white;
`;
