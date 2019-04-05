import React from 'react';

// Import Components
import {Layout, Header, BlackbarInformation, TextContainer} from '../Reusable';

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


