import PropTypes from 'prop-types';
const EventItem = ({info, name, image}) =>{
    return(
        <div>
            <img src={image} alt={name} width="150" height="150"  />
            <h5>{name}</h5>
            <p>{info}</p>
        </div>
    );
}
EventItem.prototype = {
    eventObj: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
}
export default EventItem;