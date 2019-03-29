import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Boxes = ({ Icon, Path, Tooltip, myFunc, truers }) => (
  <>
    {Path ? (
      <Container>
        <Clickable to={`${Path}`} title={`${Tooltip}`}>
          <SingleIcon src={Icon} />
        </Clickable>
      </Container>
    ) : (
      <Container onClick={() => myFunc()} title={`${Tooltip}`} expand={truers}>
        <SingleIcon src={Icon}  />
      </Container>
    )}
  </>
);

export default Boxes;

const Container = styled.button`
  display: flex;
  min-height: 60px;
  width: 60px;
  margin: 4px 4px;

  background-color: transparent;
  position: relative;
  justify-content: center;
  transition: all 0.4s cubic-bezier(.23,.56,.54,1.01);
  z-index: 3;
  padding: 0px;
  margin: ${props => props.expand ? "130px 4px" : "4px 4px"};
  border: ${props => props.expand ? "0px solid #c0b283" : "2px solid #c0b283"};
  border-left: 2px solid #c0b283;


  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;
    background-color: #c0b283;
    border: 2px solid #373737;
      }
`;

const Clickable = styled(Link)`
  display: flex;
  height: 56px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SingleIcon = styled.img`
  height: 25px;
  width: 25px;
  margin: 0px;
  background-image: url(${props => props.src});
  background-size: cover;
  
  ${Container}:hover &{
    filter: invert(50%) sepia(0%) saturate(80%) hue-rotate(143deg) brightness(20%) contrast(71%);
  }
  ${Container}:active &{
    filter: invert(50%) sepia(0%) saturate(80%) hue-rotate(143deg) brightness(20%) contrast(71%);
  }
  ${Container}:focus &{
    filter: invert(50%) sepia(0%) saturate(80%) hue-rotate(143deg) brightness(20%) contrast(71%);
  }
`;
