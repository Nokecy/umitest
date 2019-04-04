import React from 'react';
import classNames from 'classNames';
import styles from './index.css';

export interface ButtonProps {
  size?: 'large' | 'default';
}

const Button: React.FC<ButtonProps> = function(props) {
  return (
    <button
      className={classNames("abc","bcd")}
      style={{
        fontSize: props.size === 'large' ? 40 : 20,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
