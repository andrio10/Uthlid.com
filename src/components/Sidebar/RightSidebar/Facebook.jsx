import React from 'react';
import styled from 'styled-components';
import FacebookPage from './FacebookPage';
const Facebook = () => (
    <Container>
        <h1> Find us on Facebook </h1>
        <FacebookPage />
    </Container>
);

export default Facebook;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    background-color: inherit;
    & > h1 {
        color: #c0b283;
    }
`;