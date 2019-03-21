import React from "react";
import styled from "styled-components";
import Add from "../../Assets/Cottages/SVG/add.svg"; // Er að ná í plús Iconið fyrir Includes.

/*

  Text Container er lýsing á sumarbústaði. 
  Ef að sumarbústaðurinn er með upplýsingar um Inlcudes þá sýnir hann þær líka. 
  Ef ekkert Includes er til staðar render'ar hann það ekki.

*/

const TextContainer = ({ TextInformation, Includes }) => (
  <Container>
    <Textbox>
      
      {TextInformation.map(values => {
        return (
          <Text>
            <TextTitle>{values.Title}</TextTitle>
            <TextParagraph>{values.Text}</TextParagraph>
          </Text>
        );
      })}
      {/* Ef að Includes eru ekki til þá sýnum load'um við ekki þennan part */}
      {Includes ? (
        <TextIncludes>
          {Includes.map(values => {
            return (
              <StayToGether>
                <Icon src={Add} />
                <IncludesTextBox>{values}</IncludesTextBox>
              </StayToGether>
            );
          })}
        </TextIncludes>
      ) : null}
    </Textbox>
    <FakeContainer />
  </Container>
);

export default TextContainer;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 80px;
`;

const Textbox = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  flex-direction: column;
  margin-left: 20px;
`;

const FakeContainer = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
`;

const Text = styled.div`
  margin: 1px auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;
const TextTitle = styled.h3``;

const TextParagraph = styled.p``;
const TextIncludes = styled.h5`
  display: flex;
  margin: 30px auto;
  font-size: 14px;
  width: 70%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const IncludesTextBox = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  white-space: nowrap;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin: 0px 15px;
`;

const StayToGether = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 30px;
  width: 150px;
  align-items: center;
`;
