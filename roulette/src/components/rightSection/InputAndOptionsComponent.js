import React, { useState } from "react";
import InputComponent  from "./InputComponent";
import OptionsComponent from "./OptionsComponent";
import { CSSTransition } from 'react-transition-group';

const InputAndOptionsComponent = ({ open, close }) => {

  const [ tempOptions, setTempOptions ] = useState([]);

  return (
      <>
        <CSSTransition
        in={open}
        timeout={500}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames="input-options"
        >
          <div>
            <InputComponent currentState={tempOptions} setNewValue={setTempOptions}/>
            <OptionsComponent currentState={tempOptions} setNewValue={setTempOptions} close={close}/> 
          </div>
        </CSSTransition>
      </>
  );
};

export default InputAndOptionsComponent;