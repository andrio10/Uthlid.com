import React from 'react';
import styled from 'styled-components';

// Import Components
import Layout from '../Reusable/Layout';
import Header from '../SinglePageCottage/Header';
import BlackbarInformation from '../Reusable/BlackbarInformation/BlackbarInformation';
import TextContainer from '../SinglePageCottage/TextContainer';

// Import Assets
import Info from '../../Assets/Golf/index';


const Golf = () => (
    <Layout>
        <Header CoverPhoto={Info.CoverPhoto}/>
        <BlackbarInformation golf={true} horseInformation={false} {...Info}/>
        <TextContainer {...Info}  />
    </Layout>
);


export default Golf;


