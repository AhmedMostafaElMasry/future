import { useEffect } from "react";
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
  };
  useEffect(() => {
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
    } else {
      setApply(false);
    }
  }, [checked]);
  const resetAll = () => {
    setApply(false);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = false;
      }
      return newState;
    });
  };
  const cars = [
    {
      id: 1,
      name: "Volkeswagen",
      check: checked.product1,
    },
    {
      id: 2,
      name: "BMW",
      check: checked.product2,
    },
    {
      id: 3,
      name: "Toyota",
      check: checked.product3,
    },
    {
      id: 4,
      name: "Nissan",
      check: checked.product4,
    },
    {
      id: 5,
      name: "Genral Motors",
      check: checked.product5,
    },
    {
      id: 6,
      name: "Hyundai",
      check: checked.product6,
    },
    {
      id: 7,
      name: "Peugeot",
      check: checked.product7,
    },
    {
      id: 8,
      name: "Kia",
      check: checked.product8,
    },
    {
      id: 9,
      name: "Volvo",
      check: checked.product9,
    },
  ];
  const handleApply = () => {
    cars.sort((a, b) => b.check - a.check);
    console.log(cars);
  };
  return (
    <div className="container">
      <div className="header">
        <button className="listBtn" onClick={resetAll}>
          RESET
        </button>
        <h1>Future Cars</h1>
        {apply ? (
          <button onClick={handleApply} className="listBtn">
            Apply Changes
          </button>
        ) : null}
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
