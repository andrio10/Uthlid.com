import React from 'react';
import styled from 'styled-components';
import FacebookPage from './FacebookPage';
import Media from '../../../Assets/Media/media';

const Facebook = () => (
    <Container>
        <a href="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/"> Find us on Facebook </a>
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
    & > a {
        color: #c0b283;
        ${Media.tablet`
        font-size: 17px;
    `}
    }
`;