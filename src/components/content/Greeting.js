import React from "react";
import { ThemeContext } from '../../App';

const Greeting = () => {
  const [name, setName] = React.useState("Mary");
  const [surname, setSurname] = React.useState("Poppins");
  const theme = React.useContext(ThemeContext);


  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <div className={theme}>
      <input value={name} onChange={handleNameChange} />
      <input value={surname} onChange={handleSurnameChange} />
    </div>
  );
};
export default Greeting;
