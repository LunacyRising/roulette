import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import InputAndOptionsComponent from "../rightSection/InputAndOptionsComponent";
import { RightSection } from "../../styledComponents/rightSection/RightSection";

const RightSectionComponent = () => {

  const [ editOptions, setEditOptions ] = useState(false);

  const action = () => {
    return setEditOptions(prev => !prev)
  };

  return (
      <>
         <RightSection>
             <ButtonComponent text={"Editar Opciones"} action={action}/>
             <InputAndOptionsComponent open={editOptions} close={action}/>
         </RightSection>
      </>
  );
};

export default RightSectionComponent;