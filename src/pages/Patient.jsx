import React, { useState, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header } from "../components";

import avatar from "../data/avatar.jpg";
import avatar2 from "../data/avatar2.jpg";

import { GrLocation } from "react-icons/gr";

const Patient = () => {
  const [patientData, setPatientData] = useState([]);
  const { imgage, setImage } = useState();

  const sendAPIRequest = async (reqData) => {
    // let randomNumber = parseInt(Math.floor(Math.random() * 2) + 1);
    // setTimeout(function () {
    //   if (randomNumber === 1 || randomNumber === 0.5) {
    //     toast.success("😍 submitted succesfully !", {
    //       position: "top-right",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   } else {
    //     toast.error("🤨 issue occured, please try again !", {
    //       position: "top-right",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   }
    // }, 3000);

    // const url = "http://192.168.0.103:8080/emr/getallpatient";
    const url = "https://potential-happiness.herokuapp.com/emr/getallpatient";
    let respData = "";
    let resp = [];
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(reqData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      resp = await res.json();
      respData = resp;
    } catch (error) {
      toast.warn("🤨 issue occured, please try again !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      respData = {
        status: "FAILED",
        statusCode: 500,
      };
    }
    return respData;
  };

  useEffect(() => {
    sendAPIRequest()
      .then((res) => {
        setPatientData(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const gridEmployeeProfile = (props) => (
    <div className="flex items-center gap-2">
      <img
        className="rounded-full w-10 h-10"
        src={props.imgLocation}
        alt="patient"
      />
      <p>{props.firstName + " " + props.middleName + " " + props.lastName}</p>
    </div>
  );

  const gridEmployeeCountry = (props) => (
    <div className="flex items-center justify-center gap-2">
      <GrLocation />
      <span>{props.state}</span>
    </div>
  );

  const patientGrid = [
    {
      headerText: "Patient Name",
      width: "150",
      template: gridEmployeeProfile,
      textAlign: "Center",
    },
    // { field: "Name", headerText: "", width: "0", textAlign: "Center" },
    {
      field: "age",
      headerText: "Age",
      width: "170",
      textAlign: "Center",
    },
    {
      field: "gender",
      headerText: "Gender",
      width: "170",
      textAlign: "Center",
    },
    {
      field: "mobileNumber",
      headerText: "Mobile Number",
      width: "135",
      // format: "yMd",
      textAlign: "Center",
    },
    {
      field: "city",
      headerText: "City",
      width: "120",
      textAlign: "Center",
    },
    {
      headerText: "State",
      width: "120",
      textAlign: "Center",
      template: gridEmployeeCountry,
    },
  ];

  return (
    <div className="m-2 md:m-5 p-4 md:p-5 bg-white rounded-3xl">
      <Header category="Page" title="Patient Details" />
      <GridComponent
        dataSource={patientData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {patientGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Patient;
