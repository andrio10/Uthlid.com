import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "./Header";
import BlackbarInformation from "../Reusable/BlackbarInformation/BlackbarInformation";
import TextContainer from "./TextContainer";
import { CottageInfoOjbect } from "../../Assets/Cottages/"; // CottageInfoOjbect inniheldur upplýsingar um alla sumarbústaðina.

// Síðan fyrir hvern og einn sumarbúsað.

function SinglePageCottage(props) {
  const [Information, setInformation] = useState(
    CottageInfoOjbect[props.match.params.id.toLowerCase()]
  );

  useEffect(() => {
    setInformation(CottageInfoOjbect[props.match.params.id.toLowerCase()]);
  });

  return (
    <Container>
      <Header {...Information} />{" "}
      {/* Sendi niður upplýsingarnar í gegnum props. */}
      <BlackbarInformation horseInformation={false} {...Information}/>
      <TextContainer {...Information} />
    </Container>
  );
}
export default SinglePageCottage;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 75vw;
  margin: 30px auto;
`;
