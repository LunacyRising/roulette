import React from "react";
import { Main } from "../../styledComponents/Main";
import RightSectionComponent from "../rightSection/RightSectionComponent";
import CenterComponent from "../centerSection/CenterComponent";
//import Canvas from "../centerSection/Canvas";

const MainComponent = () => {

  return (
      <>
         <Main>
             <RightSectionComponent/>
             <CenterComponent/>
         </Main>
      </>
  );
};

export default MainComponent;