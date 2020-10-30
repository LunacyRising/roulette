import React from "react";
import { Button } from "../styledComponents/Button";

const ButtonComponent = ( { text, action }) => {

  return (
      <>
         <Button onClick={action}>
            {text}
         </Button>
      </>
  );
};

export default ButtonComponent;