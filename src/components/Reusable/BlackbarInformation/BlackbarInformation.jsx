import React from 'react';
import styled from 'styled-components';
import Blackbar from './Blackbar';
import Information from './Information';

/*

    Þetta er undir Reusable því að við ætlum að nota þetta líka fyrir golfið, í stað þess að copy/paste'a þetta 
    undir HorseRental og SinglePageCottages.


    BlackbarInformation inniheldur upplýsingar fyrir Svarta og ljósbrúna kassann á Sumarbústaðar síðunum.
    Sendir niður í Information(Ljósbrúni kassinn) og Blackbar.

*/


const BlackbarInformation = ({BlackbarInfo, Price, Title}) => (
    <Container>
        <Blackbar Info={BlackbarInfo}/>
        <Information Price={Price} Title={Title} />
    </Container>
);


export default BlackbarInformation;


const Container = styled.div`
    display: flex;
    width: 80%;
    margin: 0px auto;
    height: 1px;
    align-items: center;
`;
