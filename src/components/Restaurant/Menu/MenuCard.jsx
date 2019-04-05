import React from "react";
import styled from "styled-components";

// Assets
import { Colors, Media } from "../../../Assets/Variables/";

const MenuCard = ({ Title, Ingred, Price }) => (
  <Container>
    <TitleDescription>
      {Ingred ? (
        <>
          <TitleText>{Title}</TitleText>
          <DescriptionText>{Ingred}</DescriptionText>
        </>
      ) : (
        <TitleText fullHeight>{Title}</TitleText>
      )}
    </TitleDescription>
    {Price ? <PriceText>{Price || ""}</PriceText> : null}
  </Container>
);

export default MenuCard;

const Container = styled.div`
  display: flex;
  min-height: 50px;
  width: 100%;
  margin-bottom: 10px;
  background-color: ${Colors.BLACK};
  border-radius: 50px;
  color: ${Colors.GOLD};
  padding-left: 20px;
  overflow: hidden;
`;

const TitleDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 100%;
  ${Media.phone`width: 100%;`}
`;

const PriceText = styled.div`
  display: flex;
  min-height: 100%;
  width: 11%;
  min-width: 100px;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 20px;
  background-color: ${Colors.GOLD};
  color: ${Colors.BLACK};
  overflow: hidden;
  border-radius: 50px;
  ${Media.phone`
    font-size: 12px;
    min-width: 60px;
  `}
`;

const TitleText = styled.h1`
  height: 100%;
  width: 100%;
  display: flex;
  margin: 0px;
  font-size: 20px;
  align-items: center;
  font-weight: 900;
`;

const DescriptionText = styled.p`
  height: 100%;
  width: 100%;
  display: flex;
  margin: 0px;
  text-align: left;
  font-size: 12px;
  ${Media.phone`font-size: 8px;`}
`;
