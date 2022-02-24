import "./styles.css";

export default function CarItem({ car, index, handleChange }) {
  return (
    <li>
      <div className="item">
        <input
          type="checkbox"
          id={car.name}
          className="checkbox"
          checked={car.check}
          onChange={handleChange(index)}
        />
        <label htmlFor={car.name} className="itemName">
          {car.name}
        </label>
      </div>
      <span className="number">{car.id}</span>
    </li>
  );
}
