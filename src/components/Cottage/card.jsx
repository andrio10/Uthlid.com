import React from "react";
import styled from "styled-components";
import LargeIcons from "./LargeIcons";
import SmallIcon from "./SmallIcon";
import Button from '../Reusable/Button';
import Colors from '../../Assets/Variables/Colors';

const Card = ({ CoverPhoto, Title, BlackbarInfo, SmallIcons, URL }) => (
  <Container>
    <Image src={CoverPhoto} />
    <TitleText>{Title}</TitleText>
    <Line />
    <LargeIcons IconArray={BlackbarInfo} />
    <SmallIcon IconArray={SmallIcons} />
    <Button toPath={`/cottages/${URL}`} background={true} BackgroundColor={`${Colors.BLACK}`}>
      {`See More `}
    </Button>
  </Container>
);

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #F4F4F4!important;
  height: 700px;
  width: 500px;
  overflow: hidden;
  margin: 30px auto;
  color: ${Colors.GOLD};
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
`;

const Line = styled.div`
  height: 1px;
  width: 70%;
  background-color: #dcd0c0;
  display: flex;
  margin: 0px auto;
`;

const TitleText = styled.h1`
  font-size: 30px;
  margin: 0px;
  padding: 0px;
  color: #373737;
  font-weight: 200;
`;

