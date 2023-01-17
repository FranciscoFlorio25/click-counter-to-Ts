import React, { MouseEventHandler } from "react";
import '../StyleSheet/Button.css';

interface ButtonProps{
    Text:string,
    IsClickButton: boolean,
    HandleClick: MouseEventHandler<HTMLButtonElement>
}

const Button : React.FC<ButtonProps> = (props) =>{
    return (
        <button className={props.IsClickButton ? 'click-button' : 'reset-button'} onClick={props.HandleClick}>
            {props.Text}
        </button>
    );
}

export default Button;