import React, { useState, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
  Selection
} from "@syncfusion/ej2-react-grids";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../components";
import { GrLocation } from "react-icons/gr";

const Patient = () => {
  const [patientData, setPatientData] = useState([]);
  const [fullName, setFullName] = useState();

  const [patientVisit, setPatientVisit] = useState([]);
  const [symtoms, setSymtoms] = useState([]);
  const [medicine, setMedicine] = useState([]);

  const rooturl = process.env.REACT_APP_ROOT_URL_UAT;

  const getAllPatientResp = async (reqData) => {

    const url = `${rooturl}emr/getallpatient`;
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
    getAllPatientResp()
      .then((res) => {
        setPatientData(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const getPateintChartResp = async (reqData) => {
    const url = `${rooturl}emr/getpatientchart/${reqData}`;
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
      console.log(res)
      if (res.status === 200) {
        resp = await res.json();
        respData = resp;

        toast.success("😍 fetched succesfully !!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      } else {
        setPatientVisit([])
        setSymtoms([])
        setMedicine([])

        toast.warn(`🤨 No data found for with patient mobile number ${reqData} !!!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

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
    }
    return respData;
  };



  const gridEmployeeProfile = (props) => (
    <div className="flex items-center gap-2">
      {/* <img
        className="rounded-full w-10 h-10"
        src={props.imgLocation}
        alt="patient"
      /> */}
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
      textAlign: "Left",
    },
    // { field: "Name", headerText: "", width: "0", textAlign: "Center" },
    {
      field: "age",
      headerText: "Age",
      width: "170",
      textAlign: "Left",
    },
    {
      field: "gender",
      headerText: "Gender",
      width: "170",
      textAlign: "Left",
    },
    {
      field: "mobileNumber",
      headerText: "Mobile Number",
      width: "135",
      // format: "yMd",
      textAlign: "Left",
    },
    {
      field: "city",
      headerText: "City",
      width: "120",
      textAlign: "Left",
    },
    {
      headerText: "State",
      width: "120",
      textAlign: "Center",
      template: gridEmployeeCountry,
    }, {
      field: "createdDate",
      headerText: "created date",
      width: "120",
      textAlign: "Left",
    }, {
      field: "createdTime",
      headerText: "created time",
      width: "120",
      textAlign: "Left",
    }
  ];


  const patientCommunicationGrid = [

    {
      field: "patient_illness_det",
      headerText: "cause of visit",
      width: "120",
      textAlign: "Left",
    }, {
      field: "reportedTo",
      headerText: "patient reported to",
      width: "120",
      textAlign: "Left",
    }, {
      field: "createdDate",
      headerText: "created date",
      width: "120",
      textAlign: "Left",
    }, {
      field: "createdTime",
      headerText: "created time",
      width: "120",
      textAlign: "Left",
    }
  ];

  const doctorSymtomsGrid = [

    {
      field: "patient_Symptoms",
      headerText: "Probable Symtoms for",
      width: "120",
      textAlign: "Left",
    }, {
      field: "reportedBy",
      headerText: "analysis by Dr",
      width: "120",
      textAlign: "Left",
    }, {
      field: "createdDate",
      headerText: "created date",
      width: "120",
      textAlign: "Left",
    }, {
      field: "createdTime",
      headerText: "created time",
      width: "120",
      textAlign: "Left",
    }
  ];

  const medicineGrid = [

    {
      field: "patient_cure_pres",
      headerText: "prescribe medicines",
      width: "120",
      textAlign: "Left",
    }, {
      field: "reportedBy",
      headerText: "analysis by Dr",
      width: "120",
      textAlign: "Left",
    }, {
      field: "createdDate",
      headerText: "created date",
      width: "120",
      textAlign: "Left",
    }, {
      field: "createdTime",
      headerText: "created time",
      width: "120",
      textAlign: "Left",
    }
  ];

  const rowselect = (args) => {
    const getPatientName = args.data.firstName + " " + args.data.middleName + " " + args.data.lastName;
    setFullName(getPatientName);

    getPateintChartResp(args.data.mobileNumber)
      .then((res) => {

        if (res != "" || res.length != 0) {
          let temp1 = []
          res.forEach((res, index) => {
            if (res.patient_illness_det !== null) {
              temp1.push(res)
            }
          })
          setPatientVisit(temp1);

          let temp2 = []
          res.forEach((res, index) => {
            if (res.patient_Symptoms !== null) {
              temp2.push(res)
            }
          })
          setSymtoms(temp2);

          let temp3 = []
          res.forEach((res, index) => {
            if (res.patient_cure_pres !== null) {
              temp3.push(res)
            }
          })
          setMedicine(temp3);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <div className="m-2 md:m-5 p-4 md:p-5 bg-white rounded-3xl">
      <Header category="Page" title="Patient Details" />
      <GridComponent
        dataSource={patientData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        selectedRowIndex={4}
        rowSelected={rowselect.bind(this)}
      //allowFiltering
      >

        <ColumnsDirective>
          {patientGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Selection]} />
      </GridComponent>

      <div className="m-2 md:m-5 p-4 md:p-5 bg-white rounded-3xl"> {patientVisit == "" && (
        <b> No Record Exist With </b>
      )} <b> Patient Name : </b> <b className="text-3xl text-gray-400">&nbsp;&nbsp;{fullName} </b>

        {patientVisit != "" && (
          <div className="m-2 md:m-5 p-4 md:p-5 bg-white rounded-3xl"> Cause of Visit :
            <GridComponent dataSource={patientVisit}>
              <ColumnsDirective>
                {patientCommunicationGrid.map((item, index) => (
                  <ColumnDirective key={index} {...item} />
                ))}
              </ColumnsDirective>
            </GridComponent>
          </div>
        )}



        {symtoms != "" && (<div className="m-2 md:m-5 p-4 md:p-5 bg-white rounded-3xl"> Symtoms :
          <GridComponent dataSource={symtoms}>
            <ColumnsDirective>
              {doctorSymtomsGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </GridComponent>
        </div>)}

        {medicine != "" && (<div className="m-2 md:m-5 p-4 md:p-5 bg-white rounded-3xl"> Medication :
          <GridComponent dataSource={medicine}>
            <ColumnsDirective>
              {medicineGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </GridComponent>
        </div>
        )}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Patient;
