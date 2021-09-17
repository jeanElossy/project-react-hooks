import { useState } from "react";
import PetsList from "./components/PetsList";


const App = () =>{

  const [filter, setFilter] = useState("");
  
  const handleFilter = (filter) =>{
    setFilter(filter.target.value);
  }

  
  return (
    <div className="container">

      <div className="row w-25 ms-1 mt-3">
        <div className="col"> 
          <select className="form-select" aria-label="Default select example" onChange={handleFilter}>
            <option value="">Filtrer</option>
            <option value="type" >Type</option>
            <option value="location" >Location</option>
          </select>
        </div>
      </div> 

      <PetsList filter={filter} />
    </div>
  );
}

export default App;
