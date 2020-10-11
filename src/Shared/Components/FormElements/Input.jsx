import React, { useReducer, useEffect } from 'react';

import { validate } from '../../Utils/Validators';
import './Input.scss';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      };
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  let element ;
  switch (props.element) {
    case "input":
      element = <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
    />
      break;
    case "textarea":
      element = <textarea
      id={props.id}
      rows={props.rows || 3}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
    />
      break;
    case "select":
      element = <select
          multiple={props.selectOption.multiple}
          value={inputState.value}
          onChange={changeHandler}
          onBlur={touchHandler}
        >
          <option value={""}>{props.placeholder}</option>
          {props.selectOption.options.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
      break;
  
    default:
      break;
  }

  return (
    <div
    className={`formulario-control ${!inputState.isValid &&
        inputState.isTouched &&
      'formulario-control--invalid'} ${props.className}`}
      style={props.style}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;