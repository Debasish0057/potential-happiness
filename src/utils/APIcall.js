const errorResponse = (e) => {
  const formSubmissonError = {
    error: "some error occured, please try after sometimes",
  };
};

const sendAPIRequest = async (url, reqData) => {
  console.log(reqData);
  const respData = "";
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(reqData),
    });
    respData = await res.json();
  } catch (error) {
    console.log(error);
    respData = formSubmissonError.json();
  }
  return respData;
};
