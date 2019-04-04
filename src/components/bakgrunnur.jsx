import React from "react";
import styled from "styled-components";

// Assets
import BackgroundImg from "../Assets/MainSite/coverphoto.jpg";
import Colors from "../Assets/Variables/Colors";
import ButtonReusable from "./Reusable/Button";
import Media from "../Assets/Media/media";
// Tók myndina í cover.css út því að hún er alltof stór til að vera að refresha í hvert skipti sem að þú prufar eh.

function Bakgrunnur() {
  return (
    <Container>
      <BackgroundImage src={BackgroundImg} />
      <TextContainer>
        <Column end>
          <TitleText> Úthlíð </TitleText>
        </Column>
        <Row>
          <Paragraph>
            {`
             In unspoiled Icelandic landscape. Centrally in the 
             Golden Circle, close to Geysir, Gullfoss and Thingvellir.  
             One hour from Reykjavík.
             `}
          </Paragraph>
        </Row>
        <Column>
          <ButtonReusable
            toPath="https://property.godo.is/booking.php?propid=12862"
            isExternal
            BackgroundColor={Colors.BLACK}
            background={true}
          >
            Book Now
          </ButtonReusable>
        </Column>
      </TextContainer>
    </Container>
  );
}

export default Bakgrunnur;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  justify-content: center;
  align-items: center;

`;

const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  filter: opacity(55%);
  left: 0;
`;

const TextContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 2;
  flex-direction: column;
  color: ${Colors.BLACK};


`;

const Row = styled.div`
  display: flex;
  height: 25%;
  width: 100%;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  flex-direction: column;
  background-color: ${props => props.color || "transparent"};
  justify-content: ${props => (props.end ? "flex-end" : "flex-start")};
  align-items: center;
  color: ${Colors.GOLD};
`;

const TitleText = styled.h1`
  font-weight: 800;
  font-size: 90px;
  color: ${Colors.BLACK};
  letter-spacing: 15px;
  text-transform: uppercase;
  ${Media.desktop`font-size: 40px;`}
`;
const Paragraph = styled.h4`
  color: inherit;
  font-weight: 800;
  line-height: 2;
  white-space: pre;

  ${Media.large`
    width: 90%;
    font-size: 18px;
  `}
  ${Media.tablet`
  font-size: 15px;
  white-space: normal;`}
`;

const Button = styled.button`
  display: flex;
  width: 200px;
  height: 50px;
  border: none;
  justify-content: center;
  background-color: ${Colors.BLACK};
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  border: 2px solid ${Colors.GOLD};
  color: ${Colors.GOLD};
  transition: 0.5s all;
  letter-spacing: -1px;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    cursor: pointer;
  }
`;
