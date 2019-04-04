import React from "react";
import styled from "styled-components";
import Blackbar from "./Blackbar";
import Information from "./Information";
import Media from '../../../Assets/Media/media';
/*

    Þetta er undir Reusable því að við ætlum að nota þetta líka fyrir golfið, í stað þess að copy/paste'a þetta 
    undir HorseRental og SinglePageCottages.


    BlackbarInformation inniheldur upplýsingar fyrir Svarta og ljósbrúna kassann á Sumarbústaðar síðunum.
    Sendir niður í Information(Ljósbrúni kassinn) og Blackbar.

*/

const BlackbarInformation = Data => (
  <Container>
    <Blackbar {...Data} />
    <Information {...Data} />
  </Container>
);

export default BlackbarInformation;

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0px auto;
  height: 1px;
  align-items: center;


  ${Media.large`
    width: 100%;
  `};

  ${Media.desktop`
  height: 100%;
  flex-direction: column-reverse;
  `};




`;
