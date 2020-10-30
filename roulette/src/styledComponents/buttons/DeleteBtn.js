import styled from 'styled-components';
import eliminar from "../../utils/icons/eliminar.svg";

export const DeleteBtn = styled.button`
position: absolute;
right: -30px;
top: 50%;
transform: translateY(-50%);
width: 22px;
height: 22px;
background:url(${eliminar}) no-repeat; 
background-size: 100% 100%;
border: transparent;
cursor: pointer;
`; 