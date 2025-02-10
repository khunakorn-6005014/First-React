import "../../styles.css";
import "../../sample.css";

interface TicketComponentProps {
  name: string;
  gender: "m" | "f" | "o" | "r";
  destination: string;
  seat: number;
}

const TicketComponent = (props: TicketComponentProps) => {
  const genderString = props.gender.toUpperCase();
  const cssName = `gender${genderString}`;

  return (
    <div className="leadingColumn">
      <span className={cssName} style={{ boxSizing: "border-box", padding: "2px" }}>
        {props.name}
      </span>
      <span>🛬 {props.destination} 💺 {props.seat}</span>
    </div>
  );
};

export default TicketComponent;
