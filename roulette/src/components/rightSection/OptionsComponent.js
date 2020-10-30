import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import OptionComponent from "./OptionComponent";
import ButtonComponent from "../ButtonComponent";
import { Context } from "../../store/Store";
import { Options } from "../../styledComponents/rightSection/Options";
import { checkArrLength } from "../../helperFunctions/checkArrLength";
import { SUBMIT_OPTIONS } from "../../reducer/types";

const OptionsComponent = ({ currentState, setNewValue, close}) => {

  const [ state, dispatch ] = useContext(Context);
  
  const { options } = state; 
 
  const action = () => {
      return dispatch({type: SUBMIT_OPTIONS, payload: currentState}), close()
  }

  const checkArr = checkArrLength(currentState, 1)

  return (
      <>
         <Options>
             <TransitionGroup
             component={null}
             >
                {currentState.map(opt => (
                    <CSSTransition
                    key={opt.id}
                    timeout={200}
                    unmountOnExit={true}
                    classNames="option"
                    >
                        <OptionComponent id={opt.id} text={opt.text} currentState={currentState} setNewValue={setNewValue}/>
                    </CSSTransition>
                ))}
             </TransitionGroup>
         </Options>
         {checkArr && <ButtonComponent text={"Guardar Opciones"} action={action}/>}
      </>
  );
};

export default OptionsComponent;