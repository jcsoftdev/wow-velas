import React, { useContext } from "react";

import './Login.scss'
import image from '../../../Shared/Images/login-image.png'
import Input from '../../../Shared/Components/FormElements/Input'
import Button from '../../../Shared/Components/FormElements/Button'

import {useForm} from '../../../Shared/hooks/form-hook'
import {useHttpClient} from '../../../Shared/hooks/http-hook'
import {AuthContext} from '../../../Shared/context/auth-context'

import {VALIDATOR_REQUIRE} from '../../../Shared/Utils/Validators'

const Login = () => {

  const auth = useContext(AuthContext);

  const [formState, inputHandler] = useForm(
    {
      document: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const authSubmitHandler = async (e) => {
    e.preventDefault()
    // console.log(formState.inputs)
    try {
      const formData = new URLSearchParams();
      formData.append("USU_NUMDOCUMENTO", formState.inputs.document.value);
      formData.append("USU_PASSWORD", formState.inputs.password.value);
      const responseData = await sendRequest(
        'http://idwsoftware.com:4000/signin',
        'POST',
        {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        formData,
      );
      console.log(responseData)
      console.log(clearError)
      auth.login(responseData.token);
    } catch (err) {
      console.log(err)
      console.log(error)
    }
  }

  return (
    <div className="login">
      <div className="image">
        <img src={image} alt="user" />
      </div>
      <form onSubmit={authSubmitHandler} className="login__form-container">
        <div className="login__user">
          <div className="login__user-icon">
            <svg
              width={72}
              height={72}
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 63V57C60 53.8174 58.7357 50.7652 56.4853 48.5147C54.2348 46.2643 51.1826 45 48 45H24C20.8174 45 17.7652 46.2643 15.5147 48.5147C13.2643 50.7652 12 53.8174 12 57V63"
                stroke="#93328E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M36 33C42.6274 33 48 27.6274 48 21C48 14.3726 42.6274 9 36 9C29.3726 9 24 14.3726 24 21C24 27.6274 29.3726 33 36 33Z"
                stroke="#93328E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-primary">Iniciar Sesión</h2>
        </div>
        <div className="login__input-container">
          <Input element="input"
            id="document"
            type="document"
            label="Número de documento"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Ingrese su documento"
            onInput={inputHandler}
            />
          <Input element="input"
            id="password"
            type="password"
            label="Contraseña"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Ingrese su contraseña"
            onInput={inputHandler}
            />
          <div className="form-control checkbox">
            <label htmlFor="remember">Recuérdame</label>
            <input type="checkbox" name="remember" id="remember" />
          </div>
          <Button className="button button-primary" type="submit" disabled={!formState.isValid}>
            Acceder
          </Button>
          {/* <div className="btn btn-primary">Acceder</div> */}
          <p className="text-primary forgot">
            Registrarse | ¿Olvidaste tu contraseña?
          </p>
          <a href="/" className="return">
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2617 9H3.76172"
                stroke="#00B5E2"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.01172 14.25L3.76172 9L9.01172 3.75"
                stroke="#00B5E2"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-secondary">Volver a WOWVELAS</span>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
