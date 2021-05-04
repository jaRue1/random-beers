import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"

function App() {
  const [beerList, setBeerList] = useState(null)
  const [randomBeer, setRandomBeer] = useState(null)
  // let randomBeer = null
  useEffect(() => {
    fetch(`https://beers-api-bc.web.app/beers`)
    .then((response) => response.json())
    .then((data) => setBeerList(data))
    .catch((error) => console.log(error))
  }, [])
  const chooseRando = () =>{
    const rando = Math.floor(Math.random()* beerList.length)
    setRandomBeer(beerList[rando].name)
    console.log ({randomBeer})

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Beers</h1>
        {beerList && <button onClick={()=> chooseRando()}> Pick A Beer</button>}
        {randomBeer && <h2>{randomBeer}<hr/></h2>}
        {!beerList ? <p>Loading......</p> : beerList.map(beer => {
      return <p key={beer.id}>{beer.name}</p>
    })}
      </header>
    </div>
  );
}

export default App;
