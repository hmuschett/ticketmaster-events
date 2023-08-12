import EventItem from "./component/EventItem";  
import events from '../../utils/events.json';

const data = events._embedded.events;

const Events = ({searchTerm}) => {
    
    const handleEventClick = (id) => { console.log('event clicked: ',id)};
    const renderEvent = () =>{
        let eventsFiltered = data;
        if(searchTerm.length > 0){
            eventsFiltered = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        return eventsFiltered.map((item) => (
            <EventItem key={`event-${item.id}`} 
                       name={item.name} 
                       image={item.images[0].url} 
                       info={item.info} 
                       id={item.id}
                       onEventClick={handleEventClick}/>
        ) );
    };
    
    return (
    <div>
      <h1>Events</h1>      
      
      <ul>
        {renderEvent()}
      </ul>
      
    </div>
  );

};

export default Events;