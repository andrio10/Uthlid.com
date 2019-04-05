import React, { useState, useEffect } from "react";

// Component
import {
  Header,
  BlackbarInformation,
  TextContainer,
  Layout
} from "../Reusable";
// Assets
import { CottageInfoOjbect } from "../../Assets/Cottages/";

// CottageInfoOjbect inniheldur upplýsingar um alla sumarbústaðina.
// Síðan fyrir hvern og einn sumarbúsað.
function SinglePageCottage(props) {
  const [Information, setInformation] = useState(
    CottageInfoOjbect[props.match.params.id.toLowerCase()]
  );

  useEffect(() => {
    setInformation(CottageInfoOjbect[props.match.params.id.toLowerCase()]);
  });

  return (
    <Layout>
      <Header {...Information} />{" "}
      {/* Sendi niður upplýsingarnar í gegnum props. */}
      <BlackbarInformation horseInformation={false} {...Information} />
      <TextContainer {...Information} />
    </Layout>
  );
}
export default SinglePageCottage;
