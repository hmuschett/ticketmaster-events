import {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Events from './components/Events'



function App() { 
  const[search, setSearch] = useState('');  
  const handleSearch = (term) => { setSearch(term);};
  
  return (
    <>
     <Navbar onSearch={handleSearch} />
     <Events searchTerm={search} />
    </>
  )
}

export default App
