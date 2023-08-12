import { useState } from "react"; 

const Navbar = () => {    
    const [search, setSearch] = useState('');

    const handleInputChange = (e) => { setSearch(e.target.value);};
    return (<div>
        <h1>Ticket Market</h1>
        <input type="text"  placeholder="Search Event" 
            value={search}
            onChange={handleInputChange}></input>
    </div>);
};

export default Navbar;