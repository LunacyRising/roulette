import React from "react";
import { Option } from "../../styledComponents/rightSection/Option";
import  DeleteBtnComponent  from "./DeleteBtnComponent";

const OptionComponent = ({ text, id, currentState, setNewValue }) => {

  return (
      <>
          <Option>
              {text}
          </Option>
          <DeleteBtnComponent id={id} currentState={currentState} setNewValue={setNewValue}/>
      </>
  );
};

export default OptionComponent;