import { useState } from "react";
import "./App.css";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

function App() {
  const [value, setValue] = useState(false);

  const iconSet = () => {
    if (value === true) {
      setValue(false);
    } else {
      setValue(true);
    }
  };

  console.log(value);

  return (
    <div>
      {/* <h1>{value}</h1>
      <button onClick={() => setValue("Salom dunyo")}>change</button> */}
      <button onClick={iconSet}>
        {value ? <IoMoon /> : <MdOutlineWbSunny />}
      </button>
    </div>
  );
}

export default App;
