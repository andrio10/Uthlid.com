import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import LargeIcons from "./LargeIcons";
import SmallIcon from "./SmallIcon";

const Card = ({CoverPhoto, Title, BlackbarInfo, SmallIcons, URL}) => (
  <Container>
    <Image src={CoverPhoto} />
    <TitleText>{Title}</TitleText>
    <Line />
    <LargeIcons IconArray={BlackbarInfo} />
    <SmallIcon IconArray={SmallIcons} />
    <Button to={`/cottages/${URL}`} >{`See More`} </Button>
  </Container>
);

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f4f4f4;
  height: 700px;
  width: 500px;
  border-radius: 5%;
  overflow: hidden;
  margin: 30px auto;
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

const Button = styled(Link)`
  width: 40%;
  height: 50px;
  display: flex;
  margin: 20px auto;
  border: 1px #c6bbac solid;
  justify-content: center;
  color: #373737;
  border-radius: 20px;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 12px;
  text-transform: uppercase;
  background-color: #dcd0c0;
  cursor: pointer;
`;
