import { useState } from "react";
import CarItem from "../CarItem";
import "./styles.css";

export default function FutureCars() {
  const [apply, setApply] = useState(false);
  const [checked, setChecked] = useState({
    product1: false,
    product2: false,
    product3: false,
    product4: false,
    product5: false,
    product6: false,
    product7: false,
    product8: false,
    product9: false,
  });
  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
    if (
      checked.product1 === true ||
      checked.product2 === true ||
      checked.product3 === true ||
      checked.product4 === true ||
      checked.product5 === true ||
      checked.product6 === true ||
      checked.product7 === true ||
      checked.product8 === true ||
      checked.product9 === true
    ) {
      setApply(true);
    }
  };
  const resetAll = () => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = false;
      }
      return newState;
    });
  };
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Volkeswagen",
      check: false,
    },
    {
      id: 2,
      name: "BMW",
      check: false,
    },
    {
      id: 3,
      name: "Toyota",
      check: false,
    },
    {
      id: 4,
      name: "Nissan",
      check: false,
    },
    {
      id: 5,
      name: "Genral Motors",
      check: false,
    },
    {
      id: 6,
      name: "Hyundai",
      check: false,
    },
    {
      id: 7,
      name: "Peugeot",
      check: false,
    },
    {
      id: 8,
      name: "Kia",
      check: false,
    },
    {
      id: 9,
      name: "Volvo",
      check: false,
    },
  ]);
  return (
    <div className="container">
      <div className="header">
        <button className="listBtn" onClick={resetAll}>
          RESET
        </button>
        <h1>Future Cars</h1>
        {apply ? <button className="listBtn">Apply Changes</button> : null}
      </div>
      <ul className="list">
        {cars.map((car) => (
          <CarItem
            key={car.id}
            car={car}
            checked={checked}
            toggleCheck={toggleCheck}
          />
        ))}
      </ul>
    </div>
  );
}
