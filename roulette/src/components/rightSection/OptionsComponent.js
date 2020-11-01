import React, { useContext } from "react";
import { useTransition, animated } from 'react-spring';
import OptionComponent from "./OptionComponent";
import ButtonComponent from "../ButtonComponent";
import DeleteBtnComponent from "../rightSection/DeleteBtnComponent";
import { Context } from "../../store/Store";
import { Options } from "../../styledComponents/rightSection/Options";
import { checkArrLength } from "../../helperFunctions/checkArrLength";
import { SUBMIT_OPTIONS } from "../../reducer/types";


const OptionsComponent = ({ currentState, setNewValue, close}) => {

  const [ state, dispatch ] = useContext(Context);
  
  const submitOptions = () => {
      return dispatch({type: SUBMIT_OPTIONS, payload: currentState}), close()
  }

  const checkArr = checkArrLength(currentState, 1)

  const optionsTransition = useTransition(currentState, item => item.id, {
    from: { opacity: 0, transform: "translate3d(-25%, 0px, 0px)" },
    enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
    leave: { opacity: 0, transform: "translate3d(-25%, 0px, 0px)" },
  });

  const btnFade = useTransition(checkArr, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
      <>
         <Options>
            {optionsTransition.map(({item, props, key}) => (
                item &&
                <animated.div key={key} style={{ ...props, position: "relative"}}>
                    <OptionComponent
                    id={item.id}
                    text={item.text}
                    currentState={currentState}
                    setNewValue={setNewValue}
                    />
                    <DeleteBtnComponent id={item.id} currentState={currentState} setNewValue={setNewValue}/>
                </animated.div>
            ))}
         </Options>
         {btnFade.map(({item, key, props}) => (
           item && <ButtonComponent style={props} key={key} text={"Guardar Opciones"} action={submitOptions} condition={checkArr}/>
         ))}
      </>
  );
};

export default OptionsComponent;