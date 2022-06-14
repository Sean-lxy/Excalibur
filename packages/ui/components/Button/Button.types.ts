import { MouseEventHandler } from "react";

export interface ButtonProps {
    type: 'primary' | 'secondary' | 'disabled' | 'link';
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}