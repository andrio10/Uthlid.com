import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Card = ({ Backgroundcolor, Title, Paragraph, Image, Path }) => (
  <Container background={Backgroundcolor}>
    <TextSide background={Backgroundcolor}>
      <TitleText>{Title}</TitleText>
      <Description>{Paragraph}</Description>
      <Button background={Backgroundcolor} to={`${Path}`}>Read More &nbsp; &nbsp; &#x2192;</Button>
    </TextSide>
    <ImageSide src={Image} />
  </Container>
);

export default Card;

const Container = styled.div`
  display: flex;
  height: 450px;
  width: 100%;
  background-color: ${props => (props.background ? "#373737" : "white")};
  color: #c0b283;
  overflow: hidden;
  margin-bottom: 100px;
  flex-direction: ${props => (props.background ? "row" : "row-reverse")};
`;

const ImageSide = styled.img`
  height: 100%;
  width: 50%;
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${props => (props.background ? "#c0b283" : "#373737")};
  width: 50%;
`;
const TitleText = styled.h1`
  text-transform: uppercase;
`;
const Description = styled.p`
  line-height: 2;
  width: 50%;
`;
const Button = styled(Link)`
  background-color: transparent;
  border: 2px solid ${props => (props.background ? "#c0b283" : "#373737")};
  width: 200px;
  height: 50px;
  color: ${props => (props.background ? "#c0b283" : "#373737")};
  text-transform: uppercase;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`;
