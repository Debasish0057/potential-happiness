import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Employees, Patient } from './pages';


import { Navbar, Footer, Sidebar } from './components';

import './App.css';
import { useStateContext } from './contexts/ContextProvider';
import Monitor from './pages/Monitor';
import PatientForm from './pages/PatientForm';
import Logout from './pages/Logout';

function App() {
  const { activeMenu } = useStateContext();

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div> */}
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Employees />} />
                
                <Route path="/patientform" element={<PatientForm />} />

                {/* Pages */}
                <Route path="/patient" element={<Patient />} />
                <Route path="/employees" element={<Employees />} />
                
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
