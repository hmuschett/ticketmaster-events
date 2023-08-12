import PropTypes from 'prop-types';
const EventItem = ({info, name, image, id, onEventClick}) =>{

    const handleSeeMoreClick = () => {onEventClick(id);};
    return(
        <div>
            <img src={image} alt={name} width="150" height="150"  />
            <h5>{name}</h5>
            <p>{info}</p>
            <button onClick={handleSeeMoreClick}>See more</button> 
        </div>
        
    
    );
}
EventItem.prototype = {
    eventObj: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
}
export default EventItem;