import "./styles.css";

export default function CarItem({ car, checked, toggleCheck }) {
  return (
    <li>
      <div className="item">
        <input
          type="checkbox"
          id={car.name}
          className="checkbox"
          checked={checked[`product${car.id}`]}
          onChange={() => toggleCheck(`product${car.id}`)}
        />
        <label htmlFor={car.name} className="itemName">
          {car.name}
        </label>
      </div>
      <span className="number">{car.id}</span>
    </li>
  );
}
