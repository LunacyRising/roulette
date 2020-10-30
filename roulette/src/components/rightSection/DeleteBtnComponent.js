import React, { useContext } from "react";
import { DeleteBtn } from "../../styledComponents/buttons/DeleteBtn";
import { filterArray } from "../../helperFunctions/filterArray";
import { Context } from "../../store/Store";
import { REMOVE_OPTION } from "../../reducer/types";

const DeleteBtnComponent = ({ id, currentState, setNewValue }) => {

    const [ state, dispatch ] = useContext(Context);
  
    const { options } = state;

    const filter = () => {
        //return dispatch({type: REMOVE_OPTION, payload: filterArray(options, "id", id)});
        return setNewValue(filterArray(currentState, "id", id))
    };

  return (
      <>
          <DeleteBtn onClick={filter}>
          </DeleteBtn>
      </>
  );
};

export default DeleteBtnComponent;