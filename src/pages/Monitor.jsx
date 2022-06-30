import React from "react";

import { Button,NameSubmit } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Monitor = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-12">
        <NameSubmit/>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,453.88</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
