import React from 'react'

const PetsCard = ({pet, handleAdopted }) => {

  return (
    <div className="card ">
      <img src={pet.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <div>
          <span className="badge bg-success">{pet.location}</span>
          <span className="badge bg-warning ms-2">{pet.type}</span>
        </div>
        <h5 className="card-title">{pet.nom}</h5>
        <p className="card-text">{pet.adopted ? "Adopted" : "Disponible"}</p>
        <a 
          href="#" 
          className={pet.adopted ? 'btn btn-danger' : 'btn btn-primary'} 
          onClick={() => handleAdopted(pet.id)}>{pet.adopted ? "Disponible" : "Adopt"}
        </a>
      </div>
    </div>
  )
}
export default PetsCard;
