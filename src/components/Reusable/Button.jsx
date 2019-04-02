import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../Assets/Variables/Colors";

// Ef isExternal er True þá fer "toPath" á annað vefsvæði. 
// Ef isExternal er False þá skiptum við um route innan síðunar.

const ButtonReusable = ({
  toPath,
  background,
  children,
  BackgroundColor,
  isExternal
}) => (
  <>
    {isExternal ? (
      <ButtonAnchor
        background={background}
        href={toPath}
        backgroundColor={BackgroundColor}
      >
        {children}
        <Span>&nbsp; &nbsp; &#x2192;</Span>
      </ButtonAnchor>
    ) : (
      <Button
        background={background}
        to={toPath}
        backgroundColor={BackgroundColor}
      >
        {children}
        <Span>&nbsp; &nbsp; &#x2192;</Span>
      </Button>
    )}
  </>
);
export default ButtonReusable;

const Button = styled(Link)`
  background-color: ${props => props.backgroundColor || "transparent"};
  border: 2px solid
    ${props => (props.background ? `${Colors.GOLD}` : `${Colors.BLACK}`)};
  width: 200px;
  height: 50px;
  color: ${props => (props.background ? `${Colors.GOLD}` : `${Colors.BLACK}`)};
  text-transform: uppercase;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`;

const ButtonAnchor = styled.a`
  background-color: ${props => props.backgroundColor || "transparent"};
  border: 2px solid
    ${props => (props.background ? `${Colors.GOLD}` : `${Colors.BLACK}`)};
  width: 200px;
  height: 50px;
  color: ${props => (props.background ? `${Colors.GOLD}` : `${Colors.BLACK}`)};
  text-transform: uppercase;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`;

const Span = styled.span`
  transition: 0.7s all ease-out;
  color: inherit;
  opacity: 1;

  ${Button}:hover & {
    transform: translateX(80px);
    opacity: 0;
  }

  ${ButtonAnchor}:hover & {
    transform: translateX(80px);
    opacity: 0;
  }
`;
