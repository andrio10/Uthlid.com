import React from "react";
import styled from "styled-components";

import Header from "./Header";
import BlackbarInformation from "../Reusable/BlackbarInformation/BlackbarInformation";
import TextContainer from './TextContainer'; 
import CottageInfo from '../../Assets/Cottages/'; // CottageInfo inniheldur upplýsingar um alla sumarbústaðina.


// Síðan fyrir hvern og einn sumarbúsað. 

class SinglePageCottage extends React.Component {
  render() {
    const Info = CottageInfo[0]; // Er bara að velja fyrsta sumarbústaðinn í arrayinu til að skoða útlitið.
    return (
      <Container>
        <Header {...Info} /> {/* Sendi niður upplýsingarnar í gegnum props. */}
        <BlackbarInformation {...Info}/>
        <TextContainer {...Info} />
      </Container>
    );
  }
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
