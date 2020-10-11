import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import Loader from "../../Shared/Components/Designs/Loader";
import Button from "../../Shared/Components/FormElements/Button";
import Input from "../../Shared/Components/FormElements/Input";

import { useAuth } from "../../Shared/hooks/auth-hook";
// import '../../Shared/scss/'

import { useHttpClient } from "../../Shared/hooks/http-hook";
import { useForm } from "../../Shared/hooks/form-hook";

import Modal from "./Modal";

const Content = () => {
  // const { token, login, logout } = useAuth();
  const [tpaId, setTpaId] = useState([]);
  const [tpaIdSelect, setTpaIdSelect] = useState(null);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [pending, setPending] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingDetails, setPendingDetails] = useState(null);

  const [usuId, setUsuID] = useState(null)

  const [formState, inputHandler] = useForm({
    position: {
      value: "",
      isValid: false,
    },
  });

  const openModalHandler = () => {
    setIsModalOpen(true);
    console.log("open");
  };
  const closeModalHandler = () => setIsModalOpen(false);

  const openModal = async (USU_NUMDOCUMENTO) => {
    openModalHandler();
    try {
      const formData = new URLSearchParams();
      formData.append("USU_NUMDOCUMENTO", USU_NUMDOCUMENTO);
      formData.append("BranchOffice", 0);
      for (let value of formData.values()) {
        console.log(value);
      }
      const responseData = await sendRequest(
        "http://idwsoftware.com:4000/links/verificateDataSiigo/",
        "POST",
        {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        formData
      );
      console.log(responseData);
      setPendingDetails(responseData);
    } catch (err) {
      console.log(err);
      console.log(error);
    }
  };

  useEffect(() => {
    const getApi = async () => {
      try {
        const responseData = await sendRequest(
          "http://idwsoftware.com:4000/links/dashboardPendientes?STA_ID=1",
          "GET",
          {
            "Content-Type": "application/json",
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDIyODM2NTUsImV4cCI6MTYwMjM3MDA1NX0.dT7KrNw3E9AAodLC1I_Y8R6UtwTkWKvnbzJDGtaFAvY",
            authorization: "ADMINISTRADOR",
          }
        );
        setPending(responseData);

        const typeData = await sendRequest(
          "http://idwsoftware.com:4000/links/showTypeActivity"
        );
        console.log(typeData)
        setTpaId(typeData.map(({ TPA_DESCRIPCION, TPA_ID }) => ({
          name: TPA_DESCRIPCION,
          value: TPA_DESCRIPCION,
        })));
      } catch (err) {
        console.log(err);
        console.log(error);
      }
    };
    getApi();
    return () => {
      // cleanup
    };
  }, []);

  const approve = async (e) => {
    const sendData = async () => {
      try {
        const formData = new URLSearchParams();
        formData.append("USU_NUMDOCUMENTO", pendingDetails.Identification);
        formData.append("SIIGO_ID", pendingDetails.Id);
        formData.append("USU_TELEFONO", pendingDetails.Phone.Number);
        formData.append("USU_TYPE", "EXTERNO");
        formData.append("USU_EMAIL", pendingDetails.EMail);
        formData.append("FirstName", pendingDetails.FirstName);
        formData.append("LastName", pendingDetails.LastName);
        // formData.append("NIV_ID", 2)
        formData.append("USU_ID", usuId);
        formData.append("TPA_ID", tpaIdSelect);
        formData.append("CLI_TITULO", formState.inputs.position.value);
        // formData.append("EMP_DATE_START", pendingDetails);
        // formData.append("EMP_DATE_FINISH", pendingDetails);
        formData.append("StateCode", pendingDetails.City.StateCode);
        formData.append("Indicative", pendingDetails.Phone.Indicative);

        for (let value of formData.values()) {
          console.log(value);
        }
        const responseData = await sendRequest(
          "http://idwsoftware.com:4000/links/approve",
          "POST",
          {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          formData
        );
        console.log("res", responseData)
      } catch (err) {
        console.log(err);
        console.log({err});
        // console.log(error);
      }
    };
    sendData();
  };

  return (
    <div className="page-wrapper">
      {/* ============================================================== */}
      {/* Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-7 align-self-center">
            <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">
              Empleados
            </h4>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 p-0">
                  <li className="breadcrumb-item">
                    <a href="index.html" className="text-muted">
                      Módulo
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-muted active"
                    aria-current="page"
                  >
                    Empleados
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-5 align-self-center">
            <div className="customize-input float-right">
              <a
                target="_black"
                href="/client"
                type="button"
                className="btn btn-primary btn-rounded"
              >
                <i data-feather="plus" className="feather-icon" /> Ir al sitio{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* End Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Container fluid  */}
      {/* ============================================================== */}
      <div className="container-fluid">
        {/* ============================================================== */}
        {/* Start Page Content */}
        {/* ============================================================== */}
        {/* multi-column ordering */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Lista de Empleados</h4>
                <div className="table-responsive">
                  <table
                    id="multi_col_order"
                    className="table table-striped table-bordered display no-wrap"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nº Documento</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Estado</th>
                        <th>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pending.map((item, index) => {
                        return (
                          <tr key={item.USU_ID}>
                            <td>{item.USU_ID}</td>
                            <td>{item.USU_NUMDOCUMENTO}</td>
                            <td>{item.USU_EMAIL}</td>
                            <td>{item.USU_TELEFONO}</td>
                            <td>{item.ESTADO}</td>

                            <td>
                              <button
                                type="button"
                                className="btn btn-info btn-circle d-flex"
                                style={{
                                  display: "flex",
                                  margin: 0,
                                  padding: "auto",
                                }}
                                onClick={() => {
                                  openModal(item.USU_NUMDOCUMENTO);
                                  setUsuID(item.USU_ID)
                                }}
                                // onClick={openModalHandler}
                              >
                                <span style={{ fontSize: "12px" }}>ver</span>

                                <i
                                  data-feather="eye"
                                  className="feather-icon"
                                />
                              </button>
                              {/* <button
                            type="button"
                            className="btn btn-warning btn-circle"
                          >
                            <i data-feather="edit" className="feather-icon" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-circle"
                          >
                            <i
                              data-feather="trash-2"
                              className="feather-icon"
                            />
                          </button> */}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        <Modal
          show={isModalOpen}
          onCancel={closeModalHandler}
          title={pendingDetails ? pendingDetails.FullName : "No hay dat"}
          footer={
            <Button className="btn btn-primary" onClick={approve}>
              Aceptar
            </Button>
          }
        >
          {isLoading ?? <Loader />}
          {pendingDetails && !isLoading && (
            <ul className="information">
              <li className="information-name">
                <b>Nombre: </b>
                {pendingDetails.FullName}
              </li>
              <li>
                <b>Direccion: </b>
                {pendingDetails.Address}
              </li>
              <li>
                <b>Código de país: </b>
                {pendingDetails.City.CountryCode}
              </li>
              <li>
                <b>Código de ciudad: </b>
                {pendingDetails.City.CityCode}
              </li>
              <li>
                <b>Código de estado: </b>
                {pendingDetails.City.StateCode}
              </li>
              <li>
                <b>Responsabilidad fiscal: </b>
                {pendingDetails.FiscalResponsibilities}
              </li>
              <li>
                <b>Identificación: </b>
                {pendingDetails.Identification}
              </li>
              <li>
                <b>Teléfono: </b>
                {pendingDetails.Phone.Number}
              </li>
              {pendingDetails.IsActive && (
                <li>
                  <b>Activo</b>
                </li>
              )}
              {pendingDetails.IsBank && (
                <li>
                  <b>Banco</b>
                </li>
              )}
              {pendingDetails.IsCustomer && (
                <li>
                  <b>Cliente</b>
                </li>
              )}
              {pendingDetails.IsDealer && (
                <li>
                  <b>Distribuidora</b>
                </li>
              )}
              {pendingDetails.IsLeaflet && (
                <li>
                  <b>Folleto</b>
                </li>
              )}
              {pendingDetails.IsSupplier && (
                <li>
                  <b>Proveedor</b>
                </li>
              )}
              {pendingDetails.IsSocialReason && (
                <li>
                  <b>Razon Social</b>
                </li>
              )}
              {pendingDetails.IsSocialReason && (
                <li>
                  <b>Tipo de compañia VAT</b>
                </li>
              )}
            </ul>
          )}
          <SelectSearch
            options={tpaId}
            name="tipo"
            onChange={(e)=>{setTpaIdSelect(e)}}
            // search
            placeholder="tipo"
            className="select-search formulario-control"
          />
          <Input
              id="position"
              element="select"
              placeholder="Posicion de cliente"
              selectOption={{
                multiple: false,
                options: [
                  {
                    value: "Srt",
                    text: "Srt.",
                  },
                  {
                    value: "Sr",
                    text: "Sr.",
                  },
                  {
                    value: "Sra",
                    text: "Sra.",
                  },
                ],
              }}
              validators={[]}
              onInput={inputHandler}
              className="select-search"
            />
        </Modal>
      }
      {/* ============================================================== */}
      {/* End Container fluid  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* footer */}
      {/* ============================================================== */}
      <footer className="footer text-center text-muted">
        Todos los derechos reservados por Adminmart. Diseñado y desarrollado por{" "}
        <a href="https://idw.com.pe/">IDW</a>.
      </footer>
      {/* ============================================================== */}
      {/* End footer */}
      {/* ============================================================== */}
    </div>
  );
};

export default Content;
