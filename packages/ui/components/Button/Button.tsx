import React, { FC } from 'react';

import { ButtonProps } from './Button.types';

import './Button.css';

const Button: FC<ButtonProps> = ({ type, text, onClick }) => {
    return (
        <button type="button" onClick={onClick}>
            {text}
        </button>
    )
};

export default Button;