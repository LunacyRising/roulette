import React, { useState } from "react";
import InputComponent  from "./InputComponent";
import OptionsComponent from "./OptionsComponent";
import { animated, useTransition } from "react-spring";

const InputAndOptionsComponent = ({ open, close }) => {

  const [ tempOptions, setTempOptions ] = useState([]);

  const fade = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
      <>
      {
        fade.map(({ item, key, props }) =>
          item && 
          <animated.div key={key} style={props}>
            <InputComponent currentState={tempOptions} setNewValue={setTempOptions}/>
            <OptionsComponent currentState={tempOptions} setNewValue={setTempOptions} close={close}/> 
          </animated.div>
        )
      }
      </>
  );
};

export default InputAndOptionsComponent;