import "../../styles.css";

interface TicketDetailComponentProps {
  title: string;
   name: string; 
   destination: string; 
   gender: string; 
   seat: string;

}
const TicketDetailComponent = (props: TicketDetailComponentProps) => {
 
  return (
    <div className="ticketDetail">
      <h3>Ticket Detail</h3>
       <p>Name: {props.name}</p> 
       <p>Destination: {props.destination}</p> 
       <p>Gender: {props.gender}</p> 
       <p>Seat: {props.seat}</p>
    </div>
  );
};

export default TicketDetailComponent;
