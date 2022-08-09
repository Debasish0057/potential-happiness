import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Logout = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-12">
        logout
    </div>
  );
};

export default Logout;