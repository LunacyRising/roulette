import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const useInput = (initialState, currentState, setNewValue) => {

    const [ values, setValues ] = useState(initialState); 

    const randomId = uuidv4();

    const handleChange = e => {
        const target = e.target; 
        setValues(prevState => ({  
          ...prevState, 
          [target.name]: target.value
        }));
      };
     
    const addOption = e => {
      if (e.keyCode === 13 && e.target.value !== "") {
        setNewValue([{...values, id: randomId}, ...currentState])
        setValues({
          text: ""
        })
      }
    };

    return { handleChange, addOption, values }
}

export default useInput