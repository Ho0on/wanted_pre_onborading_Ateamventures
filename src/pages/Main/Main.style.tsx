import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1130px;
  margin: 40px auto;
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  padding: 8px 0px;
`;

export const HeaderDesc = styled.h3`
  font-size: ${props => props.theme.fontSize.small};
  margin-bottom: 32px;
`;

export const ReqWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 0px;
  width: 100%;
  border: 1px solid ${props => props.theme.color.gray};
  border-radius: 4px;
  color: ${props => props.theme.color.gray};
  box-sizing: border-box;
`;

export const Card = styled.div`
  width: 360px;
  height: 356px;
  margin: 7px;
  border: 1px solid gray;
  border-radius: 4px;
`;
