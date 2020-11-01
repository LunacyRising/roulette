import React from "react";
import { Button } from "../styledComponents/Button"; 

const ButtonComponent = ( { text, action, style, key }) => {

  return (
      <>
         <Button style={style} key={key} onClick={action}>
            {text}
         </Button>
      </>
  );
};

export default ButtonComponent;