import React, { useEffect, useRef, useContext } from "react";
import { Context } from "../../store/Store";
import ButtonComponent from "../ButtonComponent"; 
import { Canvas } from "../../styledComponents/centerSection/Canvas";
import { defaultOptions } from "../../utils/defaultOptions";

const CanvasComponent = () => {

    const [ state, dispatch ] = useContext(Context);
  
    const { options } = state;

    const canvasRef = useRef(null);

    let opts = options ? options : defaultOptions;

    const draw = (ctx) => {

        const center = ctx.canvas.width / 2;
        const l = opts.length;
        const pi = Math.PI;
        
        for( let i = 0; i < l; i++){
          ctx.beginPath();
          ctx.moveTo(center, center);
          ctx.arc(center, center, center-20, i* 2* pi / l, (i + 1) * 2 * pi / l);
          ctx.lineTo(center, center);
          ctx.fillStyle = `#${(Math.random().toString(16) + "000000").substring(2,8)}`
          ctx.fill();
          //nombres
          ctx.save();
          ctx.translate(center, center);
          ctx.rotate(3 * 2 * pi / (5 * l) + i * 2 * pi / l);
          ctx.translate(-center, -center);
          ctx.font = "13px 'Righteous', cursive";
          ctx.textAlign = "right";
          ctx.fillStyle = "white";
          ctx.fillText(opts[i].text, ctx.canvas.width - 30, center);
          ctx.restore();
      }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        draw(context);
    }, [options])

  return (
      <>
        <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
          <Canvas ref={canvasRef} width={440} height={440}/>
          <ButtonComponent text={"Hacela girar!"}/>
        </div>
      </>
  );
};

export default CanvasComponent;