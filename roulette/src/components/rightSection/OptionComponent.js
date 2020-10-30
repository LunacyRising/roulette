import React from "react";
import { Option } from "../../styledComponents/rightSection/Option";
import  DeleteBtnComponent  from "./DeleteBtnComponent";

const OptionComponent = ({ text, id, currentState, setNewValue}) => {

  return (
      <>
      <div style={{position: "relative"}}>
          <Option>
              {text}
          </Option>
          <DeleteBtnComponent id={id} currentState={currentState} setNewValue={setNewValue}/>
        </div>
      </>
  );
};

export default OptionComponent;