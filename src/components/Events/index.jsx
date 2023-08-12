import EventItem from "./component/EventItem";  
import events from '../../utils/events.json';

const data = events._embedded.events;

const Events = () => {
    const eventComponents = data.map((item) => (
        <EventItem key={`event-${item.id}`} 
                   name={item.name} 
                   image={item.images[0].url} 
                   info={item.info} />
    ) );
    return (
    <div>
      <h1>Events</h1>      
      
      <ul>
        {eventComponents}
      </ul>
      
    </div>
  );

};

export default Events;