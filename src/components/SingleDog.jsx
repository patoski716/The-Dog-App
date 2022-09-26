import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const SingleDog = () => {
    const [dog, setDog] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`
        )
        const data = await res.json()
        setDog(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSingleDogData()
  }, [name])
  return (
    <div className="container">
        <p><Link to='/' >
        <button className="btn btn-primary text-white btn-sm mt-5">Go back</button>
            </Link></p>
            {dog.map((item) => (
          <div
            key={item.id}>
                <h1 className="text-white">Name: {item.name}</h1>
        <div className="row">
            <div className="col-md-6 text-white mb-5">
            <img src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} alt="{item.name}" style={{maxHeight:'400px'}}/>


            </div>
            <div className="col-md-6 text-white">
            <p>Bred for: {item.bred_for}</p>
            <p >Temprament: {item.temperament}</p>
            <p>Origin: {item.origin}</p>
            <p>Breed group: {item.breed_group}</p>
            <p>Life span: {item.life_span}</p>
            <p>Weight: {item.weight.metric} kgs</p>
            <p>Height: {item.height.metric} cm</p>

            </div>
        </div>
        </div>
            ))}
     
        
    </div>
  )
}

export default SingleDog