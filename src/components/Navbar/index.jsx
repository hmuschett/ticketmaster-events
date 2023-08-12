import { useState } from "react"; 

const Navbar = ({onSearch}) => {    
    const [search, setSearch] = useState('');

    const handleInputChange = (e) => { setSearch(e.target.value);};
    const handleInputKeyDown = (e) => 
    {if(e.key === 'Enter' && search !== ''){
        onSearch(search);
        console.log(search);
    }};
    return (<div>
        <h1>Ticket Market</h1>
        <input type="text"  placeholder="Search Event" 
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}></input>
    </div>);
};

export default Navbar;