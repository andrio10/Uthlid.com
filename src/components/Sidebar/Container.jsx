import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Boxes from "./boxes";
import RightSidebar from "./RightSidebar/RightSidebar";
// Assets
import Icons from "../../Assets/MainSite/svg";
import Colors from "../../Assets/Variables/Colors";

const RowInformation = [
  { Title: `Cottages`, Path: `/Cottages`, Icon: `${Icons.CottagesIcon}` },
  {
    Title: `Horse Rental`,
    Path: `/Horserental`,
    Icon: `${Icons.HorseRentalIcon}`
  },
  { Title: `Golf`, Path: `/Golf`, Icon: `${Icons.GolfIcon}` },
  { Title: `Camping`, Path: `/Camping`, Icon: `${Icons.CampingIcon}` },
  { Title: `Restaurant`, Path: `/Restaurant`, Icon: `${Icons.DinnerIcon}` }
];

function Sidebar({ Position }) {
  /* State sem sér um hægri Sidebar */
  const [ShowRightBar, setRightBar] = useState(false);
  const ShowMyRightMenuBar = () => {
    return setRightBar(ShowRightBar => !ShowRightBar);
  };

  return (
    <Try>
      {Position === `left` ? (
        /* Vinstra SIDEBAR */
        /* Position ræður hvort sidebar fer til vinstri eða hægri */
        <Container Position={Position}>
          <HalfHeight>
            <Row>
              <Boxes Path="/" Icon={Icons.LeftIcon} />
            </Row>
            <MainIcons>
              {/* Miðju Icons vinstra meginn */}
              {RowInformation.map(value => {
                return (
                  <Row>
                    <TextTitle to={value.Path}> {value.Title} </TextTitle>
                    <Boxes Icon={value.Icon} Path={value.Path} />
                  </Row>
                );
              })}
            </MainIcons>
          </HalfHeight>
        </Container>
      ) : (
        /* HÆGRI SIDEBAR */
        /* Position ræður hvort sidebar fer til vinstri eða hægri */
        <ContainerRight Position={Position} moveRight={ShowRightBar}>
          <HalfHeight center moveRight={ShowRightBar}>
            <Boxes
              truers={ShowRightBar}
              myFunc={ShowMyRightMenuBar}
              Icon={Icons.FacebookIcon}
              Tooltip={`Facebook`}
            />
            <Boxes
              truers={ShowRightBar}
              myFunc={ShowMyRightMenuBar}
              Icon={Icons.LocationIcon}
              Tooltip={`Location`}
            />
            <Boxes
              truers={ShowRightBar}
              myFunc={ShowMyRightMenuBar}
              Icon={Icons.InfoIcon}
              Tooltip={`Contact Info`}
            />
          </HalfHeight>
          <RightSidebar ShowRightBar={ShowRightBar} />
        </ContainerRight>
      )}
    </Try>
  );
}

export default Sidebar;

const Try = styled.div`
  width: 100%;
  position: relative;
`;

const HalfHeight = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.center ? "center" : "space-between")};
  margin: 0px auto;
  width: ${props => (props.center ? "68px" : "100%")};
  z-index: 4;
  position: relative;
  background-color: ${Colors.BLACK};
`;

const MainIcons = styled.div`
  display: flex;
  height: 100%;
  margin: 4px auto;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 68px;
  position: fixed;
  z-index: 500;
  ${props => props.Position}: 0;
  background-color: ${Colors.BLACK};
  flex-direction: column;
  justify-content: flex-start;
  transition: all 0.4s cubic-bezier(0.23, 0.56, 0.54, 1.01);
`;

const ContainerRight = styled(Container)`
  flex-direction: row;
`;

const TextTitle = styled(Link)`
  box-sizing: border-box;
  width: 150px;
  background-color: ${Colors.GOLD};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  top: 0;
  left: -100px;
  color: ${Colors.BLACK};
  text-transform: uppercase;
  font-size: 16px;
  border: 2px solid ${Colors.BLACK};
  border-left: none;
  position: absolute;
  margin: 4px;
  font-weight: 900;
  z-index: -10000;
  transition: 0.4s all ease-out;
  opacity: 0;

  &:hover {
    outline: none;
    color: ${Colors.BLACK};
    text-decoration: none;
  }

  ${Row}:hover & {
    left: 60px;
    opacity: 1;
  }
`;