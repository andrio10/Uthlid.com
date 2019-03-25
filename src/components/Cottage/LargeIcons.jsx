import React from "react";
import styled from "styled-components";

const LargeIcons = ({ IconArray }) => (
  <Container>
    {IconArray.map(values => {
      {console.log(values)}
      return (
        <IconRow>
          <Icon src={values.IconBlack} />
          <IconText>{values.Text}</IconText>
        </IconRow>
      );
    })}
  </Container>
);

export default LargeIcons;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0px auto;
`;

const IconRow = styled.div`
  display: flex;
  height: 30px;
  width: 30%;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 4px 40px;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
  fill: "black";
`;

const IconText = styled.h5`
  margin: 0px 20px;
  padding: 0px;
  color: #373737;
  font-weight: 200;
  font-size: 30px;
`;
