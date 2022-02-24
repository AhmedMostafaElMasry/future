import { useEffect } from "react";
import { useState } from "react";
import CarItem from "../CarItem";
import "./styles.css";

export default function FutureCars() {
  const [apply, setApply] = useState(false);
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
  const handleChange = (index) => (e) => {
    let newCars = [...cars];
    newCars[index].check = e.target.checked;
    setCars(newCars);
  };
  const resetAll = () => {
    setApply(false);
    setCars((prevState) => {
      const newState = [...prevState];
      for (const inputName in newState) {
        newState[inputName].check = false;
      }
      return newState;
    });
  };
  useEffect(() => {
    let newCars = [...cars];
    for (const inputName in newCars) {
      if (newCars[inputName].check === true) {
        setApply(true);
      }
    }
  }, [cars]);

  const handleApply = () => {
    let newCars = [...cars];
    setCars(newCars.sort((a, b) => b.check - a.check));
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
        {cars.map((car, index) => (
          <CarItem
            key={car.id}
            car={car}
            index={index}
            handleChange={handleChange}
          />
        ))}
      </ul>
    </div>
  );
}
