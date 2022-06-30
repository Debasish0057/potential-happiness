import { useStateContext } from "../contexts/ContextProvider";

const NameSubmit = () => {

 const { values, setValues , setName} = useStateContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${values}`)
    setName(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={values}
          onChange={(e) => { 
            setValues(e.target.value);
        }}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default NameSubmit;
