import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import Card from "../Shared/Components/Designs/Card";
import Loader from "../Shared/Components/Designs/Loader";
import Button from "../Shared/Components/FormElements/Button";
import Input from "../Shared/Components/FormElements/Input";

import { useForm } from "../Shared/hooks/form-hook";
import { useHttpClient } from "../Shared/hooks/http-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "../Shared/Utils/Validators";

import "./SignUp.scss";

const SignUp = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      nombre: {
        value: "",
        isValid: false,
      },
    },
    {
      apellido: {
        value: "",
        isValid: false,
      },
    },
    {
      correo: {
        value: "",
        isValid: false,
      },
    },
    {
      telefono: {
        value: "",
        isValid: false,
      },
    },
    {
      numDoc: {
        value: "",
        isValid: false,
      },
    },
    {
      direccion: {
        value: "",
        isValid: false,
      },
    },
    {
      clientType: {
        value: "",
        isValid: false,
      },
    },
    {
      tipoTelefono: {
        value: "",
        isValid: false,
      },
    }
  );
  const [location, setLocation] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [cityDataTemp, setCityDataTemp] = useState([]);
  const [documentType, setDocumentType] = useState([]);
  const [documentTypeSelect, setDocumentTypeSelect] = useState(null);

  const getLocation = async (input) => {
    // console.log(e)
    try {
      const responseData = await sendRequest(
        `http://idwsoftware.com:4000/links/showCity?CIUDAD=${input}`
      );

      const res = responseData.map(({ CIT_CODIGO_CIUDAD, CONCATENADO }) => ({
        value: CIT_CODIGO_CIUDAD,
        name: CONCATENADO,
      }));
      setCityDataTemp(responseData);

      setLocation(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getDocumentType = async (e) => {
      const response = await sendRequest(
        `http://idwsoftware.com:4000/links/showDocumentType`
      );
      setDocumentType(
        response.map(({ TPD_DESCRIPCION, TPD_ID }) => ({
          name: TPD_DESCRIPCION,
          value: TPD_ID,
        }))
      );
    };
    getDocumentType();
    return () => {
      // cleanup
    };
  }, []);

  const onSelectLocation = (e) => {
    cityDataTemp.map((item) => {
      if (item.CIT_CODIGO_CIUDAD === e) {
        setCityData(item);
      }
    });
  };
  const onSelectDocumentType = (e) => {
    setDocumentTypeSelect(e);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new URLSearchParams();
      formData.append("USU_NUMDOCUMENTO", formState.inputs.numDoc.value);
      formData.append("USU_EMAIL", formState.inputs.correo.value);
      formData.append("USU_TELEFONO", formState.inputs.telefono.value);
      formData.append("TPD_ID", documentTypeSelect);
      formData.append("Clienttype", formState.inputs.clientType.value);
      formData.append(
        "FullName",
        `${formState.inputs.nombre.value} ${formState.inputs.apellido.value}`
      );
      formData.append("FirstName", formState.inputs.nombre.value);
      formData.append("LastName", formState.inputs.apellido.value);
      formData.append("Address", formState.inputs.direccion.value);
      formData.append("CountryCode", cityData.COU_CODIGO_PAIS);
      formData.append("StateCode", cityData.DEP_CODIGO_DEPARTAMENTO);
      formData.append("CityCode", cityData.CIT_CODIGO_CIUDAD);
      formData.append("BranchOffice", 0);
      for (let value of formData.values()) {
        console.log(value);
      }
      const responseData = await sendRequest(
        "http://idwsoftware.com:4000/signup/",
        "POST",
        {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        formData,
      );
      console.log(responseData);
    } catch {
      console.log(error);
      // console.log("error ", error.message)
    }
  };

  return (
    <div className="signup">
      <h2 className="signup__title">
        <span className="text-primary">Crear Cuenta</span>
      </h2>
      <Input
        id="correo"
        element="input"
        type="text"
        placeholder="Correo"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        errorText="Ingrese un correo electrónico válido"
        onInput={inputHandler}
        className="col-6"
      />
      {/* <div className="formulario-control">
        <label htmlFor="password">Contraseña</label>
        <input type="text" name="password" id="password" />
      </div> */}

      <SelectSearch
        options={documentType}
        name="documentType"
        onChange={onSelectDocumentType}
        // search
        placeholder="Tipo de Documento"
        className="select-search col-4 formulario-control"
      />
      <Input
        id="numDoc"
        element="input"
        type="text"
        placeholder="Número Documento"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese el número de documento"
        onInput={inputHandler}
        className="col-8"
      />
      <Input
        id="nombre"
        element="input"
        type="text"
        placeholder="Nombre"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese su nombre"
        onInput={inputHandler}
        className="col-6"
      />
      <Input
        id="apellido"
        element="input"
        type="text"
        placeholder="Apellidos"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese su apellido"
        onInput={inputHandler}
        className="col-6"
      />
      <SelectSearch
        getOptions={getLocation}
        options={location}
        name="location"
        onChange={onSelectLocation}
        search
        placeholder="Busque su ciudad"
        // className="select"
        className="select-search formulario-control col-6"
      />
      <Input
        id="direccion"
        element="input"
        type="text"
        placeholder="Dirección"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese su dirección"
        onInput={inputHandler}
        className="col-12"
      />
      <Input
        id="tipoTelefono"
        element="select"
        placeholder="Tipo de Telefono"
        selectOption={{
          multiple: false,
          options: [
            {
              value: "fijo",
              text: "Fijo",
            },
            {
              value: "celular",
              text: "Celular",
            },
          ],
        }}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        className="select-search col-6"
      />
      <Input
        id="telefono"
        element="input"
        type="number"
        placeholder="Número telefónico"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese un número telefónico válido"
        onInput={inputHandler}
        className="col-6"
      />
      <Input
              id="clientType"
              element="select"
              placeholder="Tipo de cliente"
              selectOption={{
                multiple: false,
                options: [
                  {
                    value: "IsCustomer",
                    text: "Cliente",
                  },
                  {
                    value: "IsDealer",
                    text: "Vendedor",
                  },
                ],
              }}
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              className="select-search col-6"
            />
            
      <div className="formulario-control checkbox">
        <label htmlFor="terms">
          Acepto los <a href="#">Términos y Condiciones</a> y las{" "}
          <a href="#">Políticas de Privacidad</a> del sitio
        </label>
        <input type="checkbox" name="terms" id="terms" />
      </div>
      <p>Recibirás confirmación del registro por correo electronico</p>
      <button className="btn btn-primary" onClick={submitHandler}>Registrarme</button>
      <a href="#" className="text-primary">
        Acceder | ¿Olvidaste tu contraseña?
      </a>
    </div>
  );
};

export default SignUp;
