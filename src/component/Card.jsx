import React from 'react';

const Card = ({ id, img, title, description }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants/"+ id, {
        method: "DELETE",
      });
      if(response.ok){
        alert("Restaurant has deleted")
        window.location.reload();
      }
     } catch(error){
      console.log(error);
      }
    };
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary"href={`edit/${id}`}>Edit</a>
          <button className="btn btn-error"onClick={()=>handleDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card;