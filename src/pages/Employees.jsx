import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
  PageSettingsModel
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";

import avatar from "../data/avatar.jpg";
import avatar2 from "../data/avatar2.jpg";
import avatar3 from "../data/avatar3.png";
import avatar4 from "../data/avatar4.jpg";

import { GrLocation } from "react-icons/gr";

const Employees = () => {
  const employeesData = [
    {
      EmployeeID: 1,
      Name: "Debasish Pradhan",
      Title: "Application Development Analyst",
      HireDate: "16/08/2021",
      Country: "India",
      ReportsTo: "Carson",
      EmployeeImage: avatar,
    },
    {
      EmployeeID: 2,
      Name: "Pooniashi Chian",
      Title: "Medical Officer",
      HireDate: "01/02/2021",
      Country: "India",
      ReportsTo: "Carson",
      EmployeeImage: avatar2,
    },
    {
      EmployeeID: 3,
      Name: "Iulia Albu",
      Title: "HR",
      HireDate: "01/02/2021",
      Country: "USA",
      ReportsTo: "Carson",
      EmployeeImage: avatar4,
    },
    {
      EmployeeID: 4,
      Name: "Siegbert Gottfried",
      Title: "Marketing Head",
      HireDate: "01/02/2021",
      Country: "USA",
      ReportsTo: "Carson",
      EmployeeImage: avatar2,
    },
    {
      EmployeeID: 5,
      Name: "Omar Darobe",
      Title: "HR",
      HireDate: "01/02/2021",
      Country: "USA",
      ReportsTo: "Carson",
      EmployeeImage: avatar,
    },
  ];

  const gridEmployeeProfile = (props) => (
    <div className="flex items-center gap-2">
      <img
        className="rounded-full w-10 h-10"
        src={props.EmployeeImage}
        alt="employee"
      />
      <p>{props.Name}</p>
    </div>
  );

  const gridEmployeeCountry = (props) => (
    <div className="flex items-center justify-center gap-2">
      <GrLocation />
      <span>{props.Country}</span>
    </div>
  );

  const employeesGrid = [
    {
      headerText: "Employee Name",
      width: "150",
      template: gridEmployeeProfile,
      textAlign: "Center",
    },
    { field: "Name", headerText: "", width: "0", textAlign: "Center" },
    {
      field: "Title",
      headerText: "Designation",
      width: "170",
      textAlign: "Center",
    },
    {
      headerText: "Country",
      width: "120",
      textAlign: "Center",
      template: gridEmployeeCountry,
    },
    {
      field: "HireDate",
      headerText: "Hire Date",
      width: "135",
      format: "yMd",
      textAlign: "Center",
    },
    {
      field: "ReportsTo",
      headerText: "Reports To",
      width: "120",
      textAlign: "Center",
    },
    {
      field: "EmployeeID",
      headerText: "Employee ID",
      width: "125",
      textAlign: "Center",
    },
  ];

  return (
    <div className="m-2 md:m-5 p-4 md:p-5 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        pageSize
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
