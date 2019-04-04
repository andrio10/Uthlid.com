import React from "react";
import styled from "styled-components";
import Button from "../Reusable/Button";
import Colors from "../../Assets/Variables/Colors";
import Media from '../../Assets/Media/media';
const Card = ({ Backgroundcolor, Title, Paragraph, Image, Path }) => (
  <Container background={Backgroundcolor}>
    <TextSide background={Backgroundcolor}>
      <TitleText>{Title}</TitleText>
      <Description>{Paragraph}</Description>
      <Button background={Backgroundcolor} toPath={`${Path}`}>
        Read More
      </Button>
    </TextSide>
    <ImageSide src={Image} />
  </Container>
);

export default Card;

const Container = styled.div`
  display: flex;
  height: 450px;
  width: 100%;
  background-color: ${props => (props.background ? Colors.BLACK : "white")};
  color: ${Colors.GOLD};
  overflow: hidden;
  margin-top: 100px;
  flex-direction: ${props => (props.background ? "row" : "row-reverse")};

  ${Media.tablet`
    flex-direction: column-reverse;
    min-height: 500px;
    justify-content: space-between;
    align-items: center;
  `}
`;

const ImageSide = styled.img`
  height: 100%;
  width: 50%;

  ${Media.tablet`
    height: 50%;
    width: 100%;
  `}
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${props => (props.background ? Colors.GOLD : Colors.BLACK)};
  width: 50%;

  ${Media.tablet`
    width: 100%;
    height: 50%;
  `}
`;
const TitleText = styled.h1`
  text-transform: uppercase;

  ${Media.tablet`
    font-size: 30px;
  `}
`;
const Description = styled.p`
  line-height: 2;
  width: 50%;


  ${Media.desktop`
    width: 90%;
    line-height: 1.2;
  `}


`;
