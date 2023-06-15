import React, { FC, ChangeEvent, ReactElement } from "react";

import classNames from "classnames";
import styles from "./Input.module.css";
import classnames from "classnames";
import { ErrorIcon } from "../../Assets/Footer/ErrorIcon";

export enum InputTypes {
  SearchType = "searchType",
  InputType = "inputType",
};

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: true;
  className?: string;
  type: InputTypes;
};

const Input: FC<InputProps> = ((props) => {
  const { value, onChange, placeholder, disabled, error, className, type } = props;

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const inputClassName = styles[type];

  return (
    <>
      <div className={styles.container}>
        <input
          value={value}
          onChange={onChangeInput}
          placeholder={placeholder}
          disabled={disabled}
          className={classnames(className, styles.input, inputClassName, {
            [styles.disabled]: !!disabled,
            [styles.error]: error
          })}
        />
        {error && <div className={styles.textError}><ErrorIcon /> error</div>}
      </div>
    </>
  );
});

export default Input;
