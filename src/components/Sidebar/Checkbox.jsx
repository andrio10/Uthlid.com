import React from "react";
import styled from "styled-components";



const Checkbox = props => (
  <Container>
    <Label htmlFor="Checked">
      {props.children}
    </Label>
    <CheckboxInput
      type="Checkbox"
      id="Checked"
      name="Checked"
      onClick={() => props.myFunc()}
    />
  </Container>
);

export default Checkbox;

const Container = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  margin: 4px 4px;
  border: 2px solid #c0b283;
  background-color: transparent;
  position: relative;
  justify-content: center;
  transition: all 1s ease-in;
  z-index: 3;
  padding: 0px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

const Label = styled.label`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 30;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }

  & > img {
    height: 25px;
    width: 25px;
  }
`;

const CheckboxInput = styled.input`
  width: 0px;
  height: 0px;
  visibility: hidden;
`;
