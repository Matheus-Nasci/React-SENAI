import React, {ButtonHTMLAttributes} from 'react';
import './style.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    value: string;
    onClick: any;
}

const Button: React.FC<ButtonProps> = ({onClick, value, ...rest}) =>{
    return(
        <div className="btn">
            <button onClick={onClick}>
                {value}
            </button>
        </div>
    );
}

export default Button;