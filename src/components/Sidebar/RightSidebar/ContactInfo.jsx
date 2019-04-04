import React from 'react';
import styled from 'styled-components';



const ContactInfo = () => (
    <Container>
        <h1> Contact Info </h1>
        <h5> Úthlíð Travel Service </h5>
        <h5> Úthlíð, 801 Selfoss, Iceland </h5>
        <h5> Email:  uthlid@uthlid.is</h5>
        <h5> Phone  +354 699 5500</h5>
    </Container>
);


export default ContactInfo;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #c0b283;

    background-color: inherit;
`;