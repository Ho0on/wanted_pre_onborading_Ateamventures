import React, { useState } from 'react';
import styled from 'styled-components';
import FilterContent from 'components/FilterContent/FilterContent';
import { MATERIAL, PROCESS_METHOD } from 'contants';

const FilteringBox = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <FilteringBoxContainer>
      <FilteringBoxWrapper>
        <FilterContent title="가공 방식" filterData={PROCESS_METHOD} />
        <FilterContent title="재료" filterData={MATERIAL} />
        <ResetWrapper>
          <ResetIcon src="/images/refresh_icon.png" />
          <ResetText>필터링 리셋</ResetText>
        </ResetWrapper>
      </FilteringBoxWrapper>
      <ToggleWrapper>
        <InputWrapper>
          <InputCheck
            type="checkbox"
            checked={isToggled}
            onChange={handleToggle}
          />
          <Switch />
        </InputWrapper>
        <ToggleText>상담 중인 요청만 보기</ToggleText>
      </ToggleWrapper>
    </FilteringBoxContainer>
  );
};

const FilteringBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilteringBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ResetWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  position: relative;
  left: 20px;
  width: 90px;
  height: 32px;
  padding: 8px 0;
  cursor: pointer;
`;

const ResetIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const ResetText = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #2196f3;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

const InputWrapper = styled.label`
  position: relative;
  display: block;
  width: 40px;
`;

const ToggleText = styled.div`
  position: relative;
  top: 2px;
  padding-left: 16px;
  font-size: 14px;
  line-height: 20px;
`;

const Switch = styled.span`
  position: absolute;
  top: 4px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 17px;
  border-radius: 20px;
  background-color: #c2c2c2;
  transition: 0.4s;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    transition: 0.4s;
  }
`;

const InputCheck = styled.input`
  width: 40px;
  height: 17px;
  opacity: 0;

  &:checked + ${Switch} {
    background-color: #bbdefb;
    transition: 0.4s;

    &::before {
      background-color: #2196f3;
      transform: translateX(18px);
      transition: 0.4s;
    }
  }
`;

export default FilteringBox;
