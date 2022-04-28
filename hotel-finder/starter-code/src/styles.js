// create and export styled components along with the animation and theming
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const LogoSpin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CardWrapper = styled.div`
    width: 250px;
    height: 325px;
    background: #fff;
    border-radius: 15px;
    padding-bottom: 5px;
    @media (max-width: 1000px) {
        width: 400px;
    }
`;

export const ImageWrapper = styled.img`
  object-fit: cover;
  width: 100%;
  height: 60%;
  border-radius: 15px 15px 0 0;
`;
 
export const TextWrapper = styled.div`
  padding: 10px;
  height: 50px;
  text-align: center;
  color: #000;
`;
 
export const TitleWrapper = styled.h2`
  margin: 0;
  font-size: 20px;
  text-transform: uppercase;
  color: #0e4c61;
`;
 
export const DescriptionWrapper = styled.h3`
  margin-top: 5px;
  padding-bottom: 8px;
  font-size: 13px;
  color: #03045e;
  line-height: 1.2;
`;
 
export const ActionsWrapper = styled.div`
  margin-left: 10px;
  padding: 10px 0;
  display: flex;
`;
 
export const Button = styled.button`
  width: 100%;
  font-weight: bold;
  background: #caf0f8;
  margin-right: 10px;
  margin-top: 4px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  padding: 8px 0;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
 
  &:hover {
    background-color: #0e4c61;
    box-shadow: 0px 15px 20px rgba(192,192,192, 0.4);
    color: #fff;
    font-weight: bold;
    transform: translateY(-7px);
  }
`;