import React, { useState, useEffect } from 'react'
import PetsCard from './PetsCard';

const PetsList = ({filter}) => {

const [pets, setPets]  = useState([
  {
    id: 1,
    nom: "Filax",
    type: "Chien",
    location: "Abidjan",
    image: "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_960_720.jpg",
    adopted: false
  },
  {
    id: 2,
    nom: "Medor",
    type: "Chien",
    location: "Yakro",
    image: "https://cdn.pixabay.com/photo/2019/03/23/05/15/schafer-dog-4074699_960_720.jpg",
    adopted: false
  },
  {
    id: 3,
    nom: "Pitbull",
    type: "Chien",
    location: "Bouake",
    image: "https://cdn.pixabay.com/photo/2014/05/16/00/17/puppy-345334_960_720.jpg",
    adopted: false
  },
  {
    id: 4,
    nom: "Railey",
    type: "Chien",
    location: "Daoukro",
    image: "https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307_960_720.jpg",
    adopted: false
  },
  {
    id: 5,
    nom: "Line",
    type: "Chat",
    location: "France",
    image: "https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_960_720.jpg",
    adopted: false
  },
  {
    id: 6,
    nom: "Acso",
    type: "Chat",
    location: "Amerique",
    image: "https://cdn.pixabay.com/photo/2018/11/29/23/34/cat-3846780_960_720.jpg",
    adopted: false
  },
  {
    id: 7,
    nom: "Vane",
    type: "Volaille",
    location: "Dabou",
    image: "https://cdn.pixabay.com/photo/2016/11/29/05/32/rooster-1867562_960_720.jpg",
    adopted: false
  },
  {
    id: 8,
    nom: "Vale",
    type: "Volaille",
    location: "Toumodi",
    image: "https://cdn.pixabay.com/photo/2017/07/20/15/21/chickens-2522623_960_720.jpg",
    adopted: false
  }
])

const handleClick = (id) => {
  const newPets = [...pets];
  const index = newPets.findIndex(i => i.id === id);
  newPets[index].adopted = newPets[index].adopted ? false : true;

  //newPets.splice(index, 1);
  setPets(newPets);
}

useEffect(()=> {
  let newPets = [...pets];
  switch(filter) {
    case "type" : newPets.sort((a, b) =>  (a.type).localeCompare(b.type));
      break;
    case "location" : newPets.sort((a, b) => (a.location).localeCompare(b.location))
      break;
    default : setPets(newPets);
  }
  setPets(newPets);
}, [filter]) 



  return (
    <div className="container">
      <div className="row">
        {pets.map(pet => (
          <div className="col-md-3 mt-2">
            <PetsCard pet={pet} handleAdopted={handleClick} key={pet.id}/>
          </div>
        ))}
      </div>
    </div>
  )
}
export default PetsList;
