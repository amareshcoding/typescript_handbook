import React from 'react';
import { AiFillForward } from 'react-icons/ai';
type ButtonProps = {
  children: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'red' | 'green' | 'yellow' | 'blue';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};
const sizeStyle = (size: 'xs' | 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'xs':
      return {
        padding: '20px',
        fontSize: '30px',
      };
    case 'lg':
      return {
        padding: '16px',
        fontSize: '24px',
      };
    case 'md':
      return {
        padding: '12px',
        fontSize: '18px',
      };
    case 'sm':
      return {
        padding: '8px',
        fontSize: '11px',
      };
    default:
      return {
        padding: '20px',
        fontSize: '20px',
      };
  }
};
const Button = ({
  children,
  size = 'xs',
  color = 'red',
  iconLeft,
  iconRight,
}: ButtonProps) => {
  const onclick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e.target);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: color,
          color: 'white',
          borderRadius: '5px',
          borderWidth: '1px',
          margin: '2px',
          ...sizeStyle(size),
        }}
        onClick={(e) => onclick(e)}
      >
        {iconLeft}
        {children}
        {iconRight}
      </button>
      {/* <button > {<AiFillForward />} Next {<AiFillForward />}</button> */}
    </div>
  );
};

export default Button;
