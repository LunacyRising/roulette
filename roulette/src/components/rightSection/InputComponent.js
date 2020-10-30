import React, { useState, useEffect, useRef } from "react";
import { Input } from "../../styledComponents/rightSection/Input";
import { Attention } from "../../styledComponents/buttons/Attention";
import useInput  from "../../customHooks/useInput";
import atencion from "../../utils/icons/atencion.svg";

const InputComponent = ({ currentState, setNewValue }) => {

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  },[])

  const initialValues = {  
    text: "",
    id: null
  };

  const { values, handleChange, addOption } = useInput(initialValues, currentState, setNewValue)

  const { text } = values

  return ( 
      <>
        <div style={{position: "relative"}}>
          <Input 
            ref={inputRef}
            onChange={handleChange} 
            onKeyDown={addOption} 
            name="text" 
            value={text}>
          </Input>
          <picture style={{position: "relative"}}>
            <Attention src={atencion}/>
          </picture>
        </div>
      </>
  );
};

export default InputComponent;