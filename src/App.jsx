import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'

function App() {
  // console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  // console.log(puppies);

  return (
    <>
      {
        puppies.map(puppy => {
          return <p key={puppy.id}>{puppy.name}</p>
        })
      }
        
    </>
  )
}

export default App
