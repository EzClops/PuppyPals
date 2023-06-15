import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'

function App() {
  // console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // console.log(puppies);

  function handleClick() {

  }

  const featuredPup = puppies.find(pup => pup.id === featPupId)
  console.log(featuredPup);


  return (
    <>
      <p>{ featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      ) }</p>
      {
        puppies.map(puppy => {
          return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
      }
        
    </>
  )
}

export default App
