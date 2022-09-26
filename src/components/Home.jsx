import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const [dogs, setDogs] = useState([])
 
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds")
        const data = await res.json()
        setDogs(data)
      } catch (error) {
        console.error(error)
      }
    }

    setSearched(false)
    fetchDogData()
  }, [])




  

  return (
    <>
        


        {!dogs ? (
            <div>
                <h1 className="text-center text-white">
                Loading...
                </h1>
            </div>
      ) : (
        <div>
            <section className=" mt-1 py-5 mb-2 pb-2">
            <div className="container ">
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="card text-white" id="card">
                    <div>
                      <h2 className="text-center font-width-bold">The Dog App</h2>
                      
                      <p className="text-center font-width-bold">This application is powered by The <a href="https://thedogapi.com/" id="decoration">Dog Api</a></p>
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="container">
    
        <div className="row">
            {dogs.map(dog=>(
                <div className="col-md-4 mb-3" key={dog.id}>
                <div className="card">
                  
                    <img className="card-img-top"  height="250px"  src={dog.image.url} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title text-white">{dog.name}</h5>
                      <p className="card-text text-white">Bred For: {dog.bred_for}</p>
                      <Link to={`/${dog.name}`}>
                      <button className="btn btn-primary text-white btn-sm">Read more</button>
                      </Link>
                    </div>
                </div>
            </div>
            ))}    
        </div>
  
        
       
    </div>
        </div>
        
      )}
    </>
  )
}

export default Home