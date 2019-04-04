import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Media from '../../Assets/Media/media';
import MediaHeight from '../../Assets/Media/mediaHeight';

import Colors from '../../Assets/Variables/Colors';
const Boxes = ({ Icon, Path, noBorder, myFunc, truers }) => (
  <>
    {Path ? (
      <Container>
        <Clickable to={`${Path}`}>
          <SingleIcon  src={Icon} />
        </Clickable>
      </Container>
    ) : (
      <Container onClick={() => myFunc()} expand={truers}>
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
  margin: 4px;
  background-color: ${Colors.BLACK};
  position: relative;
  justify-content: center;
  align-items: center;
  transition: all 0.4s cubic-bezier(.23,.56,.54,1.01);
  z-index: 5;
  padding: 0px;
  margin: ${props => props.expand ? "130px 4px" : "4px"};
  border-left: 2px solid #c0b283;
  border: 2px solid transparent;

  ${Media.tablet`
    margin: 0px auto;
    max-height: 50px;
    width: 50px;
  `}

  ${MediaHeight.phone`
    margin: 0px auto;
  `};

  &:hover {
    cursor: pointer;
    outline: none;
    background-color: #c0b283;
    border: 2px solid #373737;
    }
  &:focus,
  &:active {
    outline: none;
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
`;
